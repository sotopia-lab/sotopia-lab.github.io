export function SiteFooter() {
    return (
      <footer className="py-6 md:px-8 md:py-10 md:mt-10">
        <div className="container flex flex-col justify-between gap-4 md:h-10 md:flex-row">
          <p className="items-center text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={"https://github.com/sotopia-lab"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Sotopia Team
            </a>
            . The source code is available on{" "}
            <a
              href={"https://github.com/sotopia-lab"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>.
                    This website is licensed under a {" "}
                    <a   href={"https://creativecommons.org/licenses/by-sa/4.0/"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4">
                        Creative Commons Attribution-ShareAlike 4.0 International License
                    </a>
                    . This means you are free to borrow the source code of this website, we just ask that you link back to this page in the footer.
            
          </p>
        </div>
      </footer>
    )
  }