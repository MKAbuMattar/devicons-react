const initialItems = [
  {
    name: 'Aarch64',
    componentName: 'Aarch64Plain',
    key: [],
  },
  {
    name: 'AdonisJS',
    componentName: 'AdonisjsOriginalWordmark',
    key: [],
  },
  {
    name: 'After Effects',
    componentName: 'AftereffectsPlain',
    key: ['adobe after effects'],
  },
  {
    name: 'Amazon Web Services',
    componentName: 'AmazonwebservicesPlainWordmark',
    key: ['aws'],
  },
  {
    name: 'Android',
    componentName: 'AndroidPlain',
    key: ['os', 'android'],
  },
  {
    name: 'AngularJS',
    componentName: 'AngularjsPlain',
    key: [],
  },
  {
    name: 'Apache',
    componentName: 'ApachePlain',
    key: [],
  },
  {
    name: 'Apachekafka',
    componentName: 'ApachekafkaOriginal',
    key: [],
  },
  {
    name: 'apple',
    componentName: 'AppleOriginal',
    key: [],
  },
  {
    name: 'appwrite',
    componentName: 'AppwritePlain',
    key: [],
  },
  {
    name: 'arduino',
    componentName: 'ArduinoPlain',
    key: [],
  },
  {
    name: 'atom',
    componentName: 'AtomOriginal',
    key: [],
  },
  {
    name: 'azure',
    componentName: 'AzurePlain',
    key: [],
  },
  {
    name: 'babel',
    componentName: 'BabelPlain',
    key: [],
  },
  {
    name: 'backbonejs',
    componentName: 'BackbonejsPlain',
    key: [],
  },
  {
    name: 'bash',
    componentName: 'BashPlain',
    key: [],
  },
  {
    name: 'behance',
    componentName: 'BehancePlain',
    key: [],
  },
  {
    name: 'bootstrap',
    componentName: 'BootstrapPlain',
    key: [],
  },
  {
    name: 'bower',
    componentName: 'BowerPlain',
    key: [],
  },
  {
    name: 'C',
    componentName: 'CPlain',
    key: [],
  },
  {
    name: 'cakephp',
    componentName: 'CakephpPlain',
    key: [],
  },
  {
    name: 'canva',
    componentName: 'CanvaOriginal',
    key: [],
  },
  {
    name: 'centos',
    componentName: 'CentosPlain',
    key: [],
  },
  {
    name: 'ceylon',
    componentName: 'CeylonPlain',
    key: [],
  },
  {
    name: 'chrome',
    componentName: 'ChromePlain',
    key: [],
  },
  {
    name: 'circleci',
    componentName: 'CircleciPlain',
    key: [],
  },
  {
    name: 'clojure',
    componentName: 'ClojureLine',
    key: [],
  },
  {
    name: 'clojurescript',
    componentName: 'ClojurescriptPlain',
    key: [],
  },
  {
    name: 'codecov',
    componentName: 'CodecovPlain',
    key: [],
  },
  {
    name: 'codeigniter',
    componentName: 'CodeigniterPlain',
    key: [],
  },
  {
    name: 'codepen',
    componentName: 'CodepenPlain',
    key: [],
  },
  {
    name: 'coffeescript',
    componentName: 'CoffeescriptOriginal',
    key: [],
  },
  {
    name: 'composer',
    componentName: 'ComposerLine',
    key: [],
  },
  {
    name: 'confluence',
    componentName: 'ConfluenceOriginal',
    key: [],
  },
  {
    name: 'couchdb',
    componentName: 'CouchdbPlain',
    key: [],
  },
  {
    name: 'C++',
    componentName: 'CPlusPlusPlain',
    key: [],
  },
  {
    name: 'crystal',
    componentName: 'CrystalOriginal',
    key: [],
  },
  {
    name: 'C#',
    componentName: 'CSharpPlain',
    key: [],
  },
  {
    name: 'css3',
    componentName: 'CSS3Plain',
    key: [],
  },
  {
    name: 'cucumber',
    componentName: 'CucumberPlain',
    key: [],
  },
  {
    name: 'd3js',
    componentName: 'D3jsPlain',
    key: [],
  },
  {
    name: 'dart',
    componentName: 'DartPlain',
    key: [],
  },
  {
    name: 'debian',
    componentName: 'DebianPlain',
    key: [],
  },
  {
    name: 'denojs',
    componentName: 'DenojsOriginal',
    key: [],
  },
  {
    name: 'digitalocean',
    componentName: 'DigitaloceanPlain',
    key: [],
  },
  {
    name: 'django',
    componentName: 'DjangoPlain',
    key: [],
  },
  {
    name: 'docker',
    componentName: 'DockerPlain',
    key: [],
  },
  {
    name: 'doctrine',
    componentName: 'DoctrinePlain',
    key: [],
  },
  {
    name: 'dot-net',
    componentName: 'DotNetPlain',
    key: [],
  },
  {
    name: 'dotnetcore',
    componentName: 'DotnetcorePlain',
    key: [],
  },
  {
    name: 'drupal',
    componentName: 'DrupalPlain',
    key: [],
  },
  {
    name: 'electron',
    componentName: 'ElectronOriginal',
    key: [],
  },
  {
    name: 'eleventy',
    componentName: 'EleventyPlain',
    key: [],
  },
  {
    name: 'elixir',
    componentName: 'ElixirPlain',
    key: [],
  },
  {
    name: 'elm',
    componentName: 'ElmPlain',
    key: [],
  },
  {
    name: 'embeddedc',
    componentName: 'EmbeddedcPlain',
    key: [],
  },
  {
    name: 'ember',
    componentName: 'EmberOriginalWordmark',
    key: [],
  },
  {
    name: 'erlang',
    componentName: 'ErlangPlain',
    key: [],
  },
  {
    name: 'express',
    componentName: 'ExpressOriginal',
    key: [],
  },
  {
    name: 'facebook',
    componentName: 'FacebookPlain',
    key: [],
  },
  {
    name: 'feathersjs',
    componentName: 'FeathersjsOriginal',
    key: [],
  },
  {
    name: 'figma',
    componentName: 'FigmaPlain',
    key: [],
  },
  {
    name: 'filezilla',
    componentName: 'FilezillaPlain',
    key: [],
  },
  {
    name: 'firebase',
    componentName: 'FirebasePlain',
    key: [],
  },
  {
    name: 'firefox',
    componentName: 'FirefoxPlain',
    key: [],
  },
  {
    name: 'flask',
    componentName: 'FlaskOriginal',
    key: [],
  },
  {
    name: 'flutter',
    componentName: 'FlutterPlain',
    key: [],
  },
  {
    name: 'foundation',
    componentName: 'FoundationPlain',
    key: [],
  },
  {
    name: 'fsharp',
    componentName: 'FSharpPlain',
    key: [],
  },
  {
    name: 'gatling',
    componentName: 'GatlingPlain',
    key: [],
  },
  {
    name: 'gatsby',
    componentName: 'GatsbyPlain',
    key: [],
  },
  {
    name: 'gcc',
    componentName: 'GCCPlain',
    key: [],
  },
  {
    name: 'gimp',
    componentName: 'GIMPPlain',
    key: [],
  },
  {
    name: 'git',
    componentName: 'GitPlain',
    key: [],
  },
  {
    name: 'github',
    componentName: 'GitHubOriginal',
    key: [],
  },
  {
    name: 'gitlab',
    componentName: 'GitLabPlain',
    key: [],
  },
  {
    name: 'gitter',
    componentName: 'GitterPlain',
    key: [],
  },
  {
    name: 'Go',
    componentName: 'GoPlain',
    key: [],
  },
  {
    name: 'godot',
    componentName: 'GodotPlain',
    key: [],
  },
  {
    name: 'google',
    componentName: 'GooglePlain',
    key: [],
  },
  {
    name: 'googlecloud',
    componentName: 'GoogleCloudPlain',
    key: [],
  },
  {
    name: 'gradle',
    componentName: 'GradlePlain',
    key: [],
  },
  {
    name: 'grails',
    componentName: 'GrailsPlain',
    key: [],
  },
  {
    name: 'graphql',
    componentName: 'GraphqlPlain',
    key: [],
  },
  {
    name: 'groovy',
    componentName: 'GroovyPlain',
    key: [],
  },
  {
    name: 'grunt',
    componentName: 'GruntPlain',
    key: [],
  },
  {
    name: 'gulp',
    componentName: 'GulpPlain',
    key: [],
  },
  {
    name: 'handlebars',
    componentName: 'HandlebarsOriginal',
    key: [],
  },
  {
    name: 'haskell',
    componentName: 'HaskellPlain',
    key: [],
  },
  {
    name: 'haxe',
    componentName: 'HaxePlain',
    key: [],
  },
  {
    name: 'heroku',
    componentName: 'HerokuPlain',
    key: [],
  },
  {
    name: 'html5',
    componentName: 'HTML5Plain',
    key: [],
  },
  {
    name: 'ie10',
    componentName: 'IE10Original',
    key: [],
  },
  {
    name: 'illustrator',
    componentName: 'IllustratorPlain',
    key: [],
  },
  {
    name: 'inkscape',
    componentName: 'InkscapePlain',
    key: [],
  },
  {
    name: 'intellij',
    componentName: 'IntellijPlain',
    key: [],
  },
  {
    name: 'ionic',
    componentName: 'IonicOriginal',
    key: [],
  },
  {
    name: 'jamstack',
    componentName: 'JamstackOriginal',
    key: [],
  },
  {
    name: 'jasmine',
    componentName: 'JasminePlain',
    key: [],
  },
  {
    name: 'java',
    componentName: 'JavaPlain',
    key: [],
  },
  {
    name: 'javascript',
    componentName: 'JavascriptPlain',
    key: [],
  },
  {
    name: 'jeet',
    componentName: 'JeetPlain',
    key: [],
  },
  {
    name: 'jenkins',
    componentName: 'JenkinsPlain',
    key: [],
  },
  {
    name: 'jest',
    componentName: 'JestPlain',
    key: [],
  },
  {
    name: 'jetbrains',
    componentName: 'JetbrainsPlain',
    key: [],
  },
  {
    name: 'jira',
    componentName: 'JiraPlain',
    key: [],
  },
  {
    name: 'jquery',
    componentName: 'JQueryPlain',
    key: [],
  },
  {
    name: 'julia',
    componentName: 'JuliaPlain',
    key: [],
  },
  {
    name: 'jupyter',
    componentName: 'JupyterPlain',
    key: [],
  },
  {
    name: 'karma',
    componentName: 'KarmaPlain',
    key: [],
  },
  {
    name: 'knockout',
    componentName: 'KnockoutPlainWordmark',
    key: [],
  },
  {
    name: 'kotlin',
    componentName: 'KotlinPlain',
    key: [],
  },
  {
    name: 'krakenjs',
    componentName: 'KrakenjsPlain',
    key: [],
  },
  {
    name: 'kubernetes',
    componentName: 'KubernetesPlain',
    key: [],
  },
  {
    name: 'laravel',
    componentName: 'LaravelPlain',
    key: [],
  },
  {
    name: 'less',
    componentName: 'LESSPlainWordmark',
    key: [],
  },
  {
    name: 'linkedin',
    componentName: 'LinkedinPlain',
    key: [],
  },
  {
    name: 'linux',
    componentName: 'LinuxPlain',
    key: [],
  },
  {
    name: 'magento',
    componentName: 'MagentoOriginal',
    key: [],
  },
  {
    name: 'markdown',
    componentName: 'MarkdownOriginal',
    key: [],
  },
  {
    name: 'materialui',
    componentName: 'MaterialUIPlain',
    key: [],
  },
  {
    name: 'matlab',
    componentName: 'MatlabPlain',
    key: [],
  },
  {
    name: 'meteor',
    componentName: 'MeteorPlain',
    key: [],
  },
  {
    name: 'minitab',
    componentName: 'MinitabPlain',
    key: [],
  },
  {
    name: 'mocha',
    componentName: 'MochaPlain',
    key: [],
  },
  {
    name: 'modx',
    componentName: 'ModxPlain',
    key: [],
  },
  {
    name: 'mongodb',
    componentName: 'MongoDBPlain',
    key: [],
  },
  {
    name: 'moodle',
    componentName: 'MoodlePlain',
    key: [],
  },
  {
    name: 'msdos',
    componentName: 'MSDosPlain',
    key: [],
  },
  {
    name: 'mysql',
    componentName: 'MySQLPlain',
    key: [],
  },
  {
    name: 'neo4j',
    componentName: 'Neo4jPlain',
    key: [],
  },
  {
    name: 'nestjs',
    componentName: 'NestJSPlain',
    key: [],
  },
  {
    name: 'nextjs',
    componentName: 'NextJSOriginal',
    key: [],
  },
  {
    name: 'nginx',
    componentName: 'NginxOriginal',
    key: [],
  },
  {
    name: 'nixos',
    componentName: 'NixosPlain',
    key: [],
  },
  {
    name: 'nodejs',
    componentName: 'NodeJSPlain',
    key: [],
  },
  {
    name: 'nodewebkit',
    componentName: 'NodewebkitPlain',
    key: [],
  },
  {
    name: 'npm',
    componentName: 'NPMOriginalWordmark',
    key: [],
  },
  {
    name: 'numpy',
    componentName: 'NumpyPlain',
    key: [],
  },
  {
    name: 'nuxtjs',
    componentName: 'NuxtJSPlain',
    key: [],
  },
  {
    name: 'objectivec',
    componentName: 'ObjectivecPlain',
    key: [],
  },
  {
    name: 'ocaml',
    componentName: 'OcamlPlain',
    key: [],
  },
  {
    name: 'opengl',
    componentName: 'OpenGLPlain',
    key: [],
  },
  {
    name: 'opera',
    componentName: 'OperaPlain',
    key: [],
  },
  {
    name: 'oracle',
    componentName: 'OracleOriginal',
    key: [],
  },
  {
    name: 'pandas',
    componentName: 'PandasPlain',
    key: [],
  },
  {
    name: 'phalcon',
    componentName: 'PhalconPlain',
    key: [],
  },
  {
    name: 'photoshop',
    componentName: 'PhotoshopPlain',
    key: [],
  },
  {
    name: 'php',
    componentName: 'PHPPlain',
    key: [],
  },
  {
    name: 'phpstorm',
    componentName: 'PHPStormPlain',
    key: [],
  },
  {
    name: 'postgresql',
    componentName: 'PostgreSQLPlain',
    key: [],
  },
  {
    name: 'premierepro',
    componentName: 'PremiereProPlain',
    key: [],
  },
  {
    name: 'processing',
    componentName: 'ProcessingPlain',
    key: [],
  },
  {
    name: 'protractor',
    componentName: 'ProtractorPlain',
    key: [],
  },
  {
    name: 'putty',
    componentName: 'PuttyPlain',
    key: [],
  },
  {
    name: 'pycharm',
    componentName: 'PycharmPlain',
    key: [],
  },
  {
    name: 'python',
    componentName: 'PythonPlain',
    key: [],
  },
  {
    name: 'qt',
    componentName: 'QtOriginal',
    key: [],
  },
  {
    name: 'Dev Icons React',
    componentName: 'DeviconsReactOriginal',
    key: [],
  },
  {
    name: 'microsoftsqlserver',
    componentName: 'MicrosoftsqlserverPlain',
    key: [],
  },
  {
    name: 'R',
    componentName: 'RPlain',
    key: [],
  },
  {
    name: 'rails',
    componentName: 'RailsPlain',
    key: [],
  },
  {
    name: 'raspberrypi',
    componentName: 'RaspberrypiLine',
    key: [],
  },
  {
    name: 'react',
    componentName: 'ReactOriginal',
    key: [],
  },
  {
    name: 'redhat',
    componentName: 'RedhatPlain',
    key: [],
  },
  {
    name: 'redis',
    componentName: 'RedisPlain',
    key: [],
  },
  {
    name: 'redux',
    componentName: 'ReduxOriginal',
    key: [],
  },
  {
    name: 'rocksdb',
    componentName: 'RocksDBPlain',
    key: [],
  },
  {
    name: 'rstudio',
    componentName: 'RstudioPlain',
    key: [],
  },
  {
    name: 'ruby',
    componentName: 'RubyPlain',
    key: [],
  },
  {
    name: 'rubymine',
    componentName: 'RubyMinePlain',
    key: [],
  },
  {
    name: 'rust',
    componentName: 'RustPlain',
    key: [],
  },
  {
    name: 'safari',
    componentName: 'SafariPlain',
    key: [],
  },
  {
    name: 'salesforce',
    componentName: 'SalesforcePlain',
    key: [],
  },
  {
    name: 'sass',
    componentName: 'SASSOriginal',
    key: [],
  },
  {
    name: 'scala',
    componentName: 'ScalaPlain',
    key: [],
  },
  {
    name: 'sequelize',
    componentName: 'SequelizePlain',
    key: [],
  },
  {
    name: 'shopware',
    componentName: 'ShopwareOriginal',
    key: [],
  },
  {
    name: 'sketch',
    componentName: 'SketchLine',
    key: [],
  },
  {
    name: 'slack',
    componentName: 'SlackPlain',
    key: [],
  },
  {
    name: 'socketio',
    componentName: 'SocketioOriginal',
    key: [],
  },
  {
    name: 'sourcetree',
    componentName: 'SourcetreeOriginal',
    key: [],
  },
  {
    name: 'spring',
    componentName: 'SpringPlain',
    key: [],
  },
  {
    name: 'spss',
    componentName: 'SpssPlain',
    key: [],
  },
  {
    name: 'sqlalchemy',
    componentName: 'SQLAlchemyPlain',
    key: [],
  },
  {
    name: 'ssh',
    componentName: 'SSHOriginal',
    key: [],
  },
  {
    name: 'storybook',
    componentName: 'StorybookPlain',
    key: [],
  },
  {
    name: 'stylus',
    componentName: 'StylusOriginal',
    key: [],
  },
  {
    name: 'subversion',
    componentName: 'SubversionOriginal',
    key: [],
  },
  {
    name: 'svelte',
    componentName: 'SveltePlain',
    key: [],
  },
  {
    name: 'swift',
    componentName: 'SwiftPlain',
    key: [],
  },
  {
    name: 'symfony',
    componentName: 'SymfonyOriginal',
    key: [],
  },
  {
    name: 'tailwindcss',
    componentName: 'TailwindCSSPlain',
    key: [],
  },
  {
    name: 'tensorflow',
    componentName: 'TensorflowPlain',
    key: [],
  },
  {
    name: 'thealgorithms',
    componentName: 'ThealgorithmsPlain',
    key: [],
  },
  {
    name: 'threejs',
    componentName: 'ThreeJSOriginal',
    key: [],
  },
  {
    name: 'tomcat',
    componentName: 'TomcatLine',
    key: [],
  },
  {
    name: 'tortoisegit',
    componentName: 'TortoisegitPlain',
    key: [],
  },
  {
    name: 'towergit',
    componentName: 'TowergitPlain',
    key: [],
  },
  {
    name: 'travis',
    componentName: 'TravisPlain',
    key: [],
  },
  {
    name: 'trello',
    componentName: 'TrelloPlain',
    key: [],
  },
  {
    name: 'twitter',
    componentName: 'TwitterOriginal',
    key: [],
  },
  {
    name: 'typescript',
    componentName: 'TypeScriptPlain',
    key: [],
  },
  {
    name: 'typo3',
    componentName: 'Typo3Plain',
    key: [],
  },
  {
    name: 'ubuntu',
    componentName: 'UbuntuPlain',
    key: [],
  },
  {
    name: 'unity',
    componentName: 'UnityOriginal',
    key: [],
  },
  {
    name: 'unix',
    componentName: 'UnixOriginal',
    key: [],
  },
  {
    name: 'uwsgi',
    componentName: 'UwsgiPlain',
    key: [],
  },
  {
    name: 'vagrant',
    componentName: 'VagrantPlain',
    key: [],
  },
  {
    name: 'vim',
    componentName: 'VimPlain',
    key: [],
  },
  {
    name: 'visualstudio',
    componentName: 'VisualStudioPlain',
    key: [],
  },
  {
    name: 'vscode',
    componentName: 'VSCodePlain',
    key: [],
  },
  {
    name: 'vuejs',
    componentName: 'VueJSPlain',
    key: [],
  },
  {
    name: 'vuestorefront',
    componentName: 'VuestorefrontPlain',
    key: [],
  },
  {
    name: 'weblate',
    componentName: 'WeblatePlain',
    key: [],
  },
  {
    name: 'webpack',
    componentName: 'WebPackPlain',
    key: [],
  },
  {
    name: 'webstorm',
    componentName: 'WebStormPlain',
    key: [],
  },
  {
    name: 'windows8',
    componentName: 'Windows8Original',
    key: [],
  },
  {
    name: 'woocommerce',
    componentName: 'WooCommercePlain',
    key: [],
  },
  {
    name: 'wordpress',
    componentName: 'WordPressPlain',
    key: [],
  },
  {
    name: 'xd',
    componentName: 'XDPlain',
    key: [],
  },
  {
    name: 'yarn',
    componentName: 'YarnOriginal',
    key: [],
  },
  {
    name: 'yii',
    componentName: 'YiiPlain',
    key: [],
  },
  {
    name: 'yunohost',
    componentName: 'YunohostPlain',
    key: [],
  },
  {
    name: 'zend',
    componentName: 'ZendPlain',
    key: [],
  },
  {
    name: 'zig',
    componentName: 'ZigOriginal',
    key: [],
  },
]

initialItems.sort((a, b) => {
  return a.name.localeCompare(b.name)
})

export default initialItems
