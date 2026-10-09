struct VsOut {
    @builtin(position) position : vec4f,
    @location(0) noiseColor : vec3f
};

@group(0) @binding(0) var<uniform> u_material : vec4f;
@group(0) @binding(1) var<uniform> u_modelview : mat4x4f;
@group(0) @binding(2) var<uniform> u_taskFlags : vec4f;

@vertex
fn vs_main(@location(0) a_pos : vec3f, @location(1) a_noise : vec3f) -> VsOut {
    var out : VsOut;

    let clipPos = u_modelview * vec4f(a_pos, 1.0);

    // Legacy clip-space z is [-1,1], WebGPU clip-space z is [0,1].
    let z_webgpu = clipPos.z * 0.5 + 0.5;

    out.position = vec4f(clipPos.x, clipPos.y, z_webgpu, clipPos.w);
    out.noiseColor = a_noise;
    return out;
}

@fragment
fn fs_main(@location(0) noiseColor : vec3f) -> @location(0) vec4f {
    if (u_taskFlags.x < 0.5) {
        return vec4f(u_material.xyz, u_material.w);
    }

    // *** TODO_A1 : Task 4-4 (4 points)
    // Use uniform color u_material.xyz and vertex noise noiseColor to create your shading.
    // Keep alpha set to u_material.w.
    // Describe the rationale of your implementation in the documentation section.
    // --- begin code ---
    // Minimal default so runtime stays stable until task code is implemented.
    let shading = mix(u_material.xyz, noiseColor * 0.6, 0.3);
    return vec4f(shading, u_material.w);
    // --- end code ---
}
