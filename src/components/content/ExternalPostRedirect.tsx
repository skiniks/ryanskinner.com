interface ExternalPostRedirectProps {
  readonly url: string
  readonly title: string
}

export default function ExternalPostRedirect({ url, title }: ExternalPostRedirectProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <p className="text-gray-400">
        This post lives on an external site.
      </p>
      <a
        href={url}
        className="font-semibold text-blue-400 hover:text-blue-300"
      >
        Continue to article
      </a>
      <script
        // eslint-disable-next-line react/dom-no-dangerously-set-innerhtml
        dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(url)})` }}
      />
    </div>
  )
}
