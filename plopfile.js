module.exports = plop => {
  plop.setGenerator('Component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/frontend/components/index.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/View.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/frontend/components/view.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/Styles.js',
        templateFile: 'plop-templates/frontend/components/ComponentStyles.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'plop-templates/frontend/components/ComponentStory.js.hbs'
      }
    ]
  })

  plop.setGenerator('Page', {
    description: 'Create a page',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/pages/{{pascalCase name}}/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/frontend/pages/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/Styles.js',
        templateFile: 'plop-templates/frontend/pages/PageStyles.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/View.js',
        templateFile: 'plop-templates/frontend/pages/View.js.hbs'
      }
    ]
  })
}
