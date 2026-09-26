/**
 * Entorno de pruebas.
 *
 * jsdom no implementa IntersectionObserver y Angular 21 corre los tests sobre
 * jsdom + vitest. Sin este stub, cualquier componente que lo use lanza
 * "ReferenceError: IntersectionObserver is not defined" al inicializarse.
 *
 * El stub no dispara callbacks: los tests de creación de componente sólo
 * necesitan que el constructor exista.
 */
if (typeof globalThis.IntersectionObserver === 'undefined') {
  class IntersectionObserverStub implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];

    constructor(
      private readonly _callback: IntersectionObserverCallback,
      private readonly _options?: IntersectionObserverInit,
    ) {}

    observe(_target: Element): void {
      /* no-op */
    }

    unobserve(_target: Element): void {
      /* no-op */
    }

    disconnect(): void {
      /* no-op */
    }

    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  globalThis.IntersectionObserver =
    IntersectionObserverStub as unknown as typeof IntersectionObserver;
}

export {};
