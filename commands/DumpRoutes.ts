import { BaseCommand } from '@adonisjs/ace'
import Route from '@ioc:Adonis/Core/Route'
import { readFile } from 'fs/promises'

export default class DumpRoutes extends BaseCommand {
  /**
   * Command Name is used to run the command
   */
  public static commandName = 'dump:routes'

  /**
   * Command Name is displayed in the "help" output
   */
  public static description = 'Dump routes list in README.md file'

  public static settings = {
    loadApp: true,
  }

  public async run() {
    const { routes } = Route
    this.logger.log(`
\n\n\n
---- ROUTES ----
${JSON.stringify(routes, null, 2)}
`)

    const content = await readFile('./README.md', 'utf-8')
    if (!content) {
      this.logger.error('Empty file `README.md`')
      return this.exit()
    }

    console.log(`
----- README -----
${JSON.stringify(content, null, 2)}
`)
  }

  public replaceTag(readme, tag, body) {
    let content = readme
    if (readme.includes(`<!-- ${tag} -->`) && readme.includes(`<!-- ${tag}stop -->`)) {
      content = content.replace(
        new RegExp(`<!-- ${tag} -->(.|\n)*<!-- ${tag}stop -->`, 'm'),
        `<!-- ${tag} -->`
      )
    }
    return content.replace(`<!-- ${tag} -->`, `<!-- ${tag} -->\n${body}\n<!-- ${tag}stop -->`)
  }
}
