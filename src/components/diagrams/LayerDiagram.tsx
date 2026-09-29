export interface DiagramLayer {
  label: string;
  nodes: string[];
}

export interface DiagramSpec {
  title: string;
  layers: DiagramLayer[];
  /** Annotation for the connector after layer i (between layer i and i+1). */
  links?: (string | undefined)[];
  caption: string;
}

/**
 * Small layered system diagram in plain HTML/CSS/SVG. Semantic (figure + ordered
 * list) so it reads correctly with a screen reader, and it stacks vertically at
 * every width so it never needs horizontal scrolling on phones.
 */
export default function LayerDiagram({ title, layers, links = [], caption }: DiagramSpec) {
  return (
    <figure className="rounded-lg border border-line bg-surface p-4 sm:p-5">
      <figcaption className="font-mono text-micro uppercase text-fg-faint">{title}</figcaption>
      <ol className="mt-4">
        {layers.map((layer, i) => (
          <li key={layer.label}>
            <div className="rounded-md border border-line-strong bg-surface-2 p-3.5">
              <p className="font-mono text-micro uppercase text-fg-faint">{layer.label}</p>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {layer.nodes.map((node) => (
                  <li
                    key={node}
                    className="rounded border border-line-strong bg-ink px-2.5 py-1 font-mono text-small text-fg"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
            {i < layers.length - 1 && (
              <div className="flex items-center gap-3 py-0.5 pl-6">
                <svg width="12" height="34" viewBox="0 0 12 34" fill="none" aria-hidden="true" className="shrink-0 text-line-ui">
                  <path d="M6 0v27" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M2 24.5l4 5 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {links[i] && <span className="font-mono text-micro text-fg-faint">{links[i]}</span>}
              </div>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-small text-fg-faint">{caption}</p>
    </figure>
  );
}
