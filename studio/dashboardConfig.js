export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62aa2b1d26edff72eb430069',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3znvaso2',
                  apiId: '98a72e45-f105-49ef-98ab-0fa352661723'
                },
                {
                  buildHookId: '62aa2b1d39f2ed6ee450e090',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-atwss1vo',
                  apiId: '3ef55b1c-27df-4afa-87b7-7e2e36758123'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AxelDevLoren/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-atwss1vo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
