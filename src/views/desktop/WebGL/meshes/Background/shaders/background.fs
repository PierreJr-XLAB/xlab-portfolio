uniform sampler2D tDiffuse;

varying vec2 vUv;

void main() {

  vec4 texture = texture2D(tDiffuse, vUv);

  // vec3 color = texture.rgb;
  vec3 color = vec3(1.0, 1.0, 1.0);
  float alpha = texture.a;

  gl_FragColor = vec4(color, alpha);
}
