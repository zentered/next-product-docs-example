Case study- Zentered and Opstrace

Opstrace is a tool to create metrics and logs platform. Opstrace clusters run in
your cloud account and therefore you don’t have to send your data out of your
network. An automated tool to create and manage secure, horizontally scalable
metrics and logs platform, Opstrace bridges that gap between SaaS-based and
self-hosted metrics and log platforms.  
Opstrace. The CLI installer allows you to point the cluster to an existing
Prometheus instance.  
Opstrace provides a detailed documentation to follow along the installation
process and handy-tips to make most out of the platform. Opstrace has
open-source running in its corporate DNA and everything from the application
code to user documentations are available on GitHub as public repositories.  
To make the documentations available on Opstrace website, the company employed
Gitbook. While Gitbook is without a doubt one of the best tools to generate
documentation from a GitHub repository, there are certain limitations to GitHub
that won’t appeal to power users.  
For instance, Gitbook doesn’t support arbitrary HTML content in markdown.
GitBook may parse some of it, but in most part, it will ignore it. You may use
HTML nevertheless.  
Another limitation is Gitbook ignores Git tags. That is GitHub integration will
synchronize Git branches but Git tags.  
Moreover, Gitbook has serious synchronizations issues with GitHub and GitBook
synchronizations aren’t always concurrent with changes made to GitBook and
GitHub.  
In case of GitHub sync errors, or changes made in parallel on GitBook and GitHub
within a few minutes timeframe, there is a risk to see changes being reverted.
This means that the changes are in either GitBook's or GitHub's history, but the
last version will lack changes made by some party. In Git terms, GitBook will
never rewrite the Git history, it will only ever do merges, and in the worst
case will favor one side over the other. Frustrated with limitations containing
usability and interactivity of their documentation, Opstrace wanted a more
reliable solution to generate documentation from their well maintained GitHub
repository. Unable to come up with a solution, Opstrace sought help of Zentered.

Zentered provides innovative web solution to firms like UBS, Investments, AIX
and of course Opstrace. Opstrace wanted them to build a custom web solution to
address limitation of Gitbook especially around synchronization.  
The custom web solution would generate an immutable documentation on the client
from the tied GitHub repository. A web service would continuously poll the git
for changes and reflect in the documentation if any. One way data binding
ensures the changes made in the documentations aren’t merged in the repository
and there is no case of one side favoring the other. Opstrace insisted
documentation must be downloadable along with repository to view offline.
Further, they wanted to retain the look and feel of the website across the
documentation to give a consistent. So the web component must display the docs
on the website with navbar, table of contents, search etc.  
Opstrace wanted Zentered to take care of the following things particularly: They
will own the content This goes without saying. Opstrace will own every piece of
content entering the documentation. (Your comments please Patrick) The same
repository should power the documentation So Opstrace had strict measures around
the source of information for the documentation. Zentered must use the same
repository of GitHub that Opstrace had been using since the beginning to
maintain their documentation. They wanted a single source of truth and so
cloning the repository was out of question. They should use their own design
GitBook severely limits amount of customization one can fit in to a
documentation. Opstrace wanted the documentation to match with their website’s
overall look and feel. It should feel like a part of the website not some
auxiliary module added at a later date. Zentered allowed custom templates. The
documentation is easy to search Nobody wants to read through a large document at
one go. Developers often access these documents to learn about a specific topic
or use case. So search functionality is crucial to its success. They follow best
SEO practices while publishing the content Opstrace knew a lot of developers are
gonna run into their product over an online search. They ensured the entire
documentation is indexable by search engines to relevant search phrases.  

