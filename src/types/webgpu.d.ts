// Minimal typing for the WebGPU entry point the inference workers probe.
interface Navigator {
  gpu?: { requestAdapter(): Promise<unknown> };
}
