import { Fragment } from 'react'

import {
  Aarch64Original,
  Aarch64Plain,
  AdonisjsOriginal,
  AdonisjsOriginalWordmark,
  AftereffectsOriginal,
  AftereffectsPlain,
  AmazonwebservicesOriginal,
  AmazonwebservicesOriginalWordmark,
  AmazonwebservicesPlainWordmark,
  AndroidOriginal,
  AndroidOriginalWordmark,
  AndroidPlain,
  AndroidPlainWordmark,
  AngularjsOriginal,
  AngularjsOriginalWordmark,
  AngularjsPlain,
  AngularjsPlainWordmark,
  ApacheLine,
  ApacheLineWordmark,
  ApacheOriginal,
  ApacheOriginalWordmark,
  ApachePlain,
  ApachePlainWordmark,
  ApachekafkaOriginal,
  ApachekafkaOriginalWordmark,
  AppceleratorOriginal,
  AppceleratorOriginalWordmark,
  AppceleratorPlainWordmark,
  AppleOriginal,
  AppwriteOriginal,
  AppwriteOriginalWordmark,
  AppwritePlain,
  AppwritePlainWordmark,
  ArduinoOriginal,
  ArduinoOriginalWordmark,
  ArduinoPlain,
  ArduinoPlainWordmark,
  AtomOriginal,
  AtomOriginalWordmark,
  AzureOriginal,
  AzureOriginalWordmark,
  AzurePlain,
  AzurePlainWordmark,
  BabelOriginal,
  BabelPlain,
  BackbonejsOriginal,
  BackbonejsOriginalWordmark,
  BackbonejsPlain,
  BackbonejsPlainWordmark,
  BashOriginal,
  BashPlain,
  BehanceOriginal,
  BehanceOriginalWordmark,
  BehancePlain,
  BehancePlainWordmark,
  BitbucketOriginal,
  BitbucketOriginalWordmark,
  BootstrapOriginal,
  BootstrapPlain,
  BootstrapPlainWordmark,
  BowerLine,
  BowerLineWordmark,
  BowerOriginal,
  BowerOriginalWordmark,
  BowerPlain,
  BowerPlainWordmark,
  BulmaPlain,
  CLine,
  COriginal,
  CPlain,
  CakephpOriginal,
  CakephpOriginalWordmark,
  CakephpPlain,
  CakephpPlainWordmark,
  CanvaOriginal,
  CentosOriginal,
  CentosOriginalWordmark,
  CentosPlain,
  CentosPlainWordmark,
  CeylonOriginal,
  CeylonOriginalWordmark,
  CeylonPlain,
  CeylonPlainWordmark,
  ChromeOriginal,
  ChromeOriginalWordmark,
  ChromePlain,
  ChromePlainWordmark,
  CircleciPlain,
  CircleciPlainWordmark,
  ClojureLine,
  ClojureOriginal,
  ClojurescriptOriginal,
  ClojurescriptPlain,
  CodecovPlain,
  CodeigniterPlain,
  CodeigniterPlainWordmark,
  CodepenOriginalWordmark,
  CodepenPlain,
  CoffeescriptOriginal,
  CoffeescriptOriginalWordmark,
  ComposerLine,
  ComposerLineWordmark,
  ComposerOriginal,
  ConfluenceOriginal,
  ConfluenceOriginalWordmark,
  CouchdbOriginal,
  CouchdbOriginalWordmark,
  CouchdbPlain,
  CouchdbPlainWordmark,
  CplusplusLine,
  CplusplusOriginal,
  CplusplusPlain,
  CrystalOriginal,
  CrystalOriginalWordmark,
  CsharpLine,
  CsharpOriginal,
  CsharpPlain,
  Css3Original,
  Css3OriginalWordmark,
  Css3Plain,
  Css3PlainWordmark,
  CucumberPlain,
  CucumberPlainWordmark,
  D3JsOriginal,
  D3JsPlain,
  DartOriginal,
  DartOriginalWordmark,
  DartPlain,
  DartPlainWordmark,
  DebianOriginal,
  DebianOriginalWordmark,
  DebianPlain,
  DebianPlainWordmark,
  DenojsOriginal,
  DenojsOriginalWordmark,
  DeviconLine,
  DeviconLineWordmark,
  DeviconOriginal,
  DeviconOriginalWordmark,
  DeviconPlain,
  DeviconPlainWordmark,
  DigitaloceanOriginal,
  DigitaloceanOriginalWordmark,
  DigitaloceanPlain,
  DigitaloceanPlainWordmark,
  DjangoLine,
  DjangoOriginal,
  DjangoPlain,
  DockerOriginal,
  DockerOriginalWordmark,
  DockerPlain,
  DockerPlainWordmark,
  DoctrineLine,
  DoctrineLineWordmark,
  DoctrineOriginal,
  DoctrineOriginalWordmark,
  DoctrinePlain,
  DoctrinePlainWordmark,
  DotNetOriginal,
  DotNetOriginalWordmark,
  DotNetPlain,
  DotNetPlainWordmark,
  DotnetcoreOriginal,
  DotnetcorePlain,
  DrupalOriginal,
  DrupalOriginalWordmark,
  DrupalPlain,
  DrupalPlainWordmark,
  ElectronOriginal,
  ElectronOriginalWordmark,
  EleventyOriginal,
  EleventyPlain,
  ElixirOriginal,
  ElixirOriginalWordmark,
  ElixirPlain,
  ElixirPlainWordmark,
  ElmOriginal,
  ElmOriginalWordmark,
  ElmPlain,
  ElmPlainWordmark,
  EmbeddedcOriginal,
  EmbeddedcOriginalWordmark,
  EmbeddedcPlain,
  EmbeddedcPlainWordmark,
  EmberOriginalWordmark,
  ErlangOriginal,
  ErlangOriginalWordmark,
  ErlangPlain,
  ErlangPlainWordmark,
  ExpressOriginal,
  ExpressOriginalWordmark,
  FacebookOriginal,
  FacebookPlain,
  FeathersjsOriginal,
  FigmaOriginal,
  FigmaPlain,
  FilezillaPlain,
  FilezillaPlainWordmark,
  FirebasePlain,
  FirebasePlainWordmark,
  FirefoxOriginal,
  FirefoxOriginalWordmark,
  FirefoxPlain,
  FirefoxPlainWordmark,
  FlaskOriginal,
  FlaskOriginalWordmark,
  FlutterOriginal,
  FlutterPlain,
  FoundationOriginal,
  FoundationOriginalWordmark,
  FoundationPlain,
  FoundationPlainWordmark,
  FsharpOriginal,
  FsharpPlain,
  GatlingPlain,
  GatlingPlainWordmark,
  GatsbyOriginal,
  GatsbyOriginalWordmark,
  GatsbyPlain,
  GatsbyPlainWordmark,
  GccOriginal,
  GccPlain,
  GimpOriginal,
  GimpOriginalWordmark,
  GimpPlain,
  GimpPlainWordmark,
  GitOriginal,
  GitOriginalWordmark,
  GitPlain,
  GitPlainWordmark,
  GithubOriginal,
  GithubOriginalWordmark,
  GitlabOriginal,
  GitlabOriginalWordmark,
  GitlabPlain,
  GitlabPlainWordmark,
  GitterPlain,
  GitterPlainWordmark,
  GoLine,
  GoOriginal,
  GoOriginalWordmark,
  GoPlain,
  GodotOriginal,
  GodotOriginalWordmark,
  GodotPlain,
  GodotPlainWordmark,
  GoogleOriginal,
  GoogleOriginalWordmark,
  GooglePlain,
  GooglePlainWordmark,
  GooglecloudOriginal,
  GooglecloudOriginalWordmark,
  GooglecloudPlain,
  GooglecloudPlainWordmark,
  GradlePlain,
  GradlePlainWordmark,
  GrailsOriginal,
  GrailsPlain,
  GraphqlPlain,
  GraphqlPlainWordmark,
  GroovyOriginal,
  GroovyPlain,
  GruntLine,
  GruntLineWordmark,
  GruntOriginal,
  GruntOriginalWordmark,
  GruntPlain,
  GruntPlainWordmark,
  GulpPlain,
  HandlebarsOriginal,
  HandlebarsOriginalWordmark,
  HaskellOriginal,
  HaskellOriginalWordmark,
  HaskellPlain,
  HaskellPlainWordmark,
  HaxeOriginal,
  HaxePlain,
  HerokuOriginal,
  HerokuOriginalWordmark,
  HerokuPlain,
  HerokuPlainWordmark,
  Html5Original,
  Html5OriginalWordmark,
  Html5Plain,
  Html5PlainWordmark,
  Ie10Original,
  IllustratorLine,
  IllustratorPlain,
  InkscapeOriginal,
  InkscapeOriginalWordmark,
  InkscapePlain,
  InkscapePlainWordmark,
  IntellijOriginal,
  IntellijOriginalWordmark,
  IntellijPlain,
  IntellijPlainWordmark,
  IonicOriginal,
  IonicOriginalWordmark,
  JamstackOriginal,
  JamstackOriginalWordmark,
  JamstackPlainWordmark,
  JasminePlain,
  JasminePlainWordmark,
  JavaOriginal,
  JavaOriginalWordmark,
  JavaPlain,
  JavaPlainWordmark,
  JavascriptOriginal,
  JavascriptPlain,
  JeetOriginal,
  JeetOriginalWordmark,
  JeetPlain,
  JeetPlainWordmark,
  JenkinsLine,
  JenkinsOriginal,
  JenkinsPlain,
  JestPlain,
  JetbrainsOriginal,
  JetbrainsPlain,
  JiraOriginal,
  JiraOriginalWordmark,
  JiraPlain,
  JiraPlainWordmark,
  JqueryOriginal,
  JqueryOriginalWordmark,
  JqueryPlain,
  JqueryPlainWordmark,
  JuliaOriginal,
  JuliaOriginalWordmark,
  JuliaPlain,
  JuliaPlainWordmark,
  JupyterOriginal,
  JupyterOriginalWordmark,
  JupyterPlain,
  JupyterPlainWordmark,
  KarmaOriginal,
  KarmaPlain,
  KnockoutPlainWordmark,
  KotlinOriginal,
  KotlinOriginalWordmark,
  KotlinPlain,
  KotlinPlainWordmark,
  KrakenjsOriginal,
  KrakenjsOriginalWordmark,
  KrakenjsPlain,
  KrakenjsPlainWordmark,
  KubernetesPlain,
  KubernetesPlainWordmark,
  LabviewOriginal,
  LabviewOriginalWordmark,
  LabviewPlain,
  LabviewPlainWordmark,
  LaravelPlain,
  LaravelPlainWordmark,
  LessPlainWordmark,
  LinkedinOriginal,
  LinkedinOriginalWordmark,
  LinkedinPlain,
  LinkedinPlainWordmark,
  LinuxOriginal,
  LinuxPlain,
  LuaOriginal,
  LuaOriginalWordmark,
  LuaPlain,
  LuaPlainWordmark,
  MagentoLine,
  MagentoOriginal,
  MagentoOriginalWordmark,
  MarkdownOriginal,
  MaterialuiOriginal,
  MaterialuiPlain,
  MatlabLine,
  MatlabOriginal,
  MatlabPlain,
  MeteorOriginal,
  MeteorOriginalWordmark,
  MeteorPlain,
  MeteorPlainWordmark,
  MicrosoftsqlserverPlain,
  MicrosoftsqlserverPlainWordmark,
  MinitabOriginal,
  MinitabPlain,
  MochaPlain,
  ModxOriginal,
  ModxOriginalWordmark,
  ModxPlain,
  ModxPlainWordmark,
  MongodbOriginal,
  MongodbOriginalWordmark,
  MongodbPlain,
  MongodbPlainWordmark,
  MoodleOriginal,
  MoodleOriginalWordmark,
  MoodlePlain,
  MoodlePlainWordmark,
  MsdosLine,
  MsdosOriginal,
  MsdosPlain,
  MysqlOriginal,
  MysqlOriginalWordmark,
  MysqlPlain,
  MysqlPlainWordmark,
  Neo4JOriginal,
  Neo4JOriginalWordmark,
  Neo4JPlain,
  Neo4JPlainWordmark,
  NestjsPlain,
  NestjsPlainWordmark,
  NextjsLine,
  NextjsOriginal,
  NextjsOriginalWordmark,
  NginxOriginal,
  NixosOriginal,
  NixosOriginalWordmark,
  NixosPlain,
  NixosPlainWordmark,
  NodejsOriginal,
  NodejsOriginalWordmark,
  NodejsPlain,
  NodejsPlainWordmark,
  NodewebkitLine,
  NodewebkitLineWordmark,
  NodewebkitOriginal,
  NodewebkitOriginalWordmark,
  NodewebkitPlain,
  NodewebkitPlainWordmark,
  NpmOriginalWordmark,
  NumpyOriginal,
  NumpyOriginalWordmark,
  NuxtjsOriginal,
  NuxtjsOriginalWordmark,
  NuxtjsPlain,
  NuxtjsPlainWordmark,
  ObjectivecPlain,
  OcamlOriginal,
  OcamlOriginalWordmark,
  OcamlPlain,
  OcamlPlainWordmark,
  OpenglOriginal,
  OpenglPlain,
  OperaOriginal,
  OperaOriginalWordmark,
  OperaPlain,
  OperaPlainWordmark,
  OracleOriginal,
  PandasOriginal,
  PandasOriginalWordmark,
  PerlOriginal,
  PerlPlain,
  PhalconOriginal,
  PhalconPlain,
  PhoenixOriginal,
  PhoenixOriginalWordmark,
  PhoenixPlain,
  PhoenixPlainWordmark,
  PhotoshopLine,
  PhotoshopPlain,
  PhpOriginal,
  PhpPlain,
  PhpstormOriginal,
  PhpstormOriginalWordmark,
  PhpstormPlain,
  PhpstormPlainWordmark,
  PostgresqlOriginal,
  PostgresqlOriginalWordmark,
  PostgresqlPlain,
  PostgresqlPlainWordmark,
  PremiereproOriginal,
  PremiereproPlain,
  ProcessingOriginal,
  ProcessingOriginalWordmark,
  ProcessingPlain,
  ProcessingPlainWordmark,
  ProtractorPlain,
  ProtractorPlainWordmark,
  PuttyOriginal,
  PuttyPlain,
  PycharmOriginal,
  PycharmOriginalWordmark,
  PycharmPlain,
  PycharmPlainWordmark,
  PythonOriginal,
  PythonOriginalWordmark,
  PythonPlain,
  PythonPlainWordmark,
  QtOriginal,
  ROriginal,
  RPlain,
  RailsOriginalWordmark,
  RailsPlain,
  RailsPlainWordmark,
  RaspberrypiLine,
  RaspberrypiLineWordmark,
  RaspberrypiOriginal,
  RaspberrypiOriginalWordmark,
  ReactOriginal,
  ReactOriginalWordmark,
  RedhatOriginal,
  RedhatOriginalWordmark,
  RedhatPlain,
  RedhatPlainWordmark,
  RedisOriginal,
  RedisOriginalWordmark,
  RedisPlain,
  RedisPlainWordmark,
  ReduxOriginal,
  RocksdbPlain,
  RstudioOriginal,
  RstudioPlain,
  RubyOriginal,
  RubyOriginalWordmark,
  RubyPlain,
  RubyPlainWordmark,
  RubymineOriginal,
  RubymineOriginalWordmark,
  RubyminePlain,
  RubyminePlainWordmark,
  RustPlain,
  SafariLine,
  SafariLineWordmark,
  SafariOriginal,
  SafariOriginalWordmark,
  SafariPlain,
  SafariPlainWordmark,
  SalesforceOriginal,
  SalesforcePlain,
  SassOriginal,
  ScalaOriginal,
  ScalaOriginalWordmark,
  ScalaPlain,
  ScalaPlainWordmark,
  SequelizeOriginal,
  SequelizeOriginalWordmark,
  SequelizePlain,
  SequelizePlainWordmark,
  ShopwareOriginal,
  ShopwareOriginalWordmark,
  SketchLine,
  SketchLineWordmark,
  SketchOriginal,
  SketchOriginalWordmark,
  SlackOriginal,
  SlackOriginalWordmark,
  SlackPlain,
  SlackPlainWordmark,
  SocketioOriginal,
  SocketioOriginalWordmark,
  SourcetreeOriginal,
  SourcetreeOriginalWordmark,
  SpringOriginal,
  SpringOriginalWordmark,
  SpringPlain,
  SpringPlainWordmark,
  SpssOriginal,
  SpssPlain,
  SqlalchemyOriginal,
  SqlalchemyOriginalWordmark,
  SqlalchemyPlain,
  SshOriginal,
  SshOriginalWordmark,
  StorybookOriginal,
  StorybookOriginalWordmark,
  StorybookPlain,
  StorybookPlainWordmark,
  StylusOriginal,
  SubversionOriginal,
  SubversionOriginalWordmark,
  SvelteOriginal,
  SvelteOriginalWordmark,
  SveltePlain,
  SveltePlainWordmark,
  SwiftOriginal,
  SwiftOriginalWordmark,
  SwiftPlain,
  SwiftPlainWordmark,
  SymfonyOriginal,
  SymfonyOriginalWordmark,
  TailwindcssOriginalWordmark,
  TailwindcssPlain,
  TensorflowLine,
  TensorflowLineWordmark,
  TensorflowOriginal,
  TensorflowOriginalWordmark,
  ThealgorithmsOriginal,
  ThealgorithmsOriginalWordmark,
  ThealgorithmsPlain,
  ThealgorithmsPlainWordmark,
  ThreejsOriginal,
  ThreejsOriginalWordmark,
  TomcatLine,
  TomcatLineWordmark,
  TomcatOriginal,
  TomcatOriginalWordmark,
  TortoisegitLine,
  TortoisegitOriginal,
  TortoisegitPlain,
  TowergitOriginal,
  TowergitOriginalWordmark,
  TowergitPlain,
  TowergitPlainWordmark,
  TravisPlain,
  TravisPlainWordmark,
  TrelloPlain,
  TrelloPlainWordmark,
  TwitterOriginal,
  TypescriptOriginal,
  TypescriptPlain,
  Typo3Original,
  Typo3OriginalWordmark,
  Typo3Plain,
  Typo3PlainWordmark,
  UbuntuPlain,
  UbuntuPlainWordmark,
  UnityOriginal,
  UnityOriginalWordmark,
  UnixOriginal,
  UwsgiOriginal,
  UwsgiPlain,
  VagrantOriginal,
  VagrantOriginalWordmark,
  VagrantPlain,
  VagrantPlainWordmark,
  VimOriginal,
  VimPlain,
  VisualstudioPlain,
  VisualstudioPlainWordmark,
  VscodeOriginal,
  VscodeOriginalWordmark,
  VscodePlain,
  VscodePlainWordmark,
  VuejsLine,
  VuejsLineWordmark,
  VuejsOriginal,
  VuejsOriginalWordmark,
  VuejsPlain,
  VuejsPlainWordmark,
  VuestorefrontOriginal,
  VuestorefrontPlain,
  WeblateOriginal,
  WeblateOriginalWordmark,
  WeblatePlain,
  WeblatePlainWordmark,
  WebpackOriginal,
  WebpackOriginalWordmark,
  WebpackPlain,
  WebpackPlainWordmark,
  WebstormOriginal,
  WebstormOriginalWordmark,
  WebstormPlain,
  WebstormPlainWordmark,
  Windows8Original,
  Windows8OriginalWordmark,
  WoocommerceOriginal,
  WoocommerceOriginalWordmark,
  WoocommercePlain,
  WoocommercePlainWordmark,
  WordpressOriginal,
  WordpressPlain,
  WordpressPlainWordmark,
  XdLine,
  XdPlain,
  YarnOriginal,
  YarnOriginalWordmark,
  YiiOriginal,
  YiiOriginalWordmark,
  YiiPlain,
  YiiPlainWordmark,
  YunohostOriginal,
  YunohostPlain,
  ZendPlain,
  ZendPlainWordmark,
  ZigOriginal,
  ZigOriginalWordmark,
  ZigPlainWordmark,
} from 'devicons-react'

const ListIcons = ({ componentName }) => {
  return (
    <Fragment>
      {componentName.toLowerCase() === 'Aarch64Original'.toLowerCase() && (
        <Aarch64Original />
      )}
      {componentName.toLowerCase() === 'Aarch64Plain'.toLowerCase() && (
        <Aarch64Plain />
      )}
      {componentName.toLowerCase() === 'AdonisjsOriginal'.toLowerCase() && (
        <AdonisjsOriginal />
      )}
      {componentName.toLowerCase() ===
        'AdonisjsOriginalWordmark'.toLowerCase() && (
        <AdonisjsOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'AftereffectsOriginal'.toLowerCase() && (
        <AftereffectsOriginal />
      )}
      {componentName.toLowerCase() === 'AftereffectsPlain'.toLowerCase() && (
        <AftereffectsPlain />
      )}
      {componentName.toLowerCase() ===
        'AmazonwebservicesOriginal'.toLowerCase() && (
        <AmazonwebservicesOriginal />
      )}
      {componentName.toLowerCase() ===
        'AmazonwebservicesOriginalWordmark'.toLowerCase() && (
        <AmazonwebservicesOriginalWordmark />
      )}
      {componentName.toLowerCase() ===
        'AmazonwebservicesPlainWordmark'.toLowerCase() && (
        <AmazonwebservicesPlainWordmark />
      )}
      {componentName.toLowerCase() === 'AndroidOriginal'.toLowerCase() && (
        <AndroidOriginal />
      )}
      {componentName.toLowerCase() ===
        'AndroidOriginalWordmark'.toLowerCase() && <AndroidOriginalWordmark />}
      {componentName.toLowerCase() === 'AndroidPlain'.toLowerCase() && (
        <AndroidPlain />
      )}
      {componentName.toLowerCase() === 'AndroidPlainWordmark'.toLowerCase() && (
        <AndroidPlainWordmark />
      )}
      {componentName.toLowerCase() === 'AngularjsOriginal'.toLowerCase() && (
        <AngularjsOriginal />
      )}
      {componentName.toLowerCase() ===
        'AngularjsOriginalWordmark'.toLowerCase() && (
        <AngularjsOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'AngularjsPlain'.toLowerCase() && (
        <AngularjsPlain />
      )}
      {componentName.toLowerCase() ===
        'AngularjsPlainWordmark'.toLowerCase() && <AngularjsPlainWordmark />}
      {componentName.toLowerCase() === 'ApacheLine'.toLowerCase() && (
        <ApacheLine />
      )}
      {componentName.toLowerCase() === 'ApacheLineWordmark'.toLowerCase() && (
        <ApacheLineWordmark />
      )}
      {componentName.toLowerCase() === 'ApacheOriginal'.toLowerCase() && (
        <ApacheOriginal />
      )}
      {componentName.toLowerCase() ===
        'ApacheOriginalWordmark'.toLowerCase() && <ApacheOriginalWordmark />}
      {componentName.toLowerCase() === 'ApachePlain'.toLowerCase() && (
        <ApachePlain />
      )}
      {componentName.toLowerCase() === 'ApachePlainWordmark'.toLowerCase() && (
        <ApachePlainWordmark />
      )}
      {componentName.toLowerCase() === 'ApachekafkaOriginal'.toLowerCase() && (
        <ApachekafkaOriginal />
      )}
      {componentName.toLowerCase() ===
        'ApachekafkaOriginalWordmark'.toLowerCase() && (
        <ApachekafkaOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'AppceleratorOriginal'.toLowerCase() && (
        <AppceleratorOriginal />
      )}
      {componentName.toLowerCase() ===
        'AppceleratorOriginalWordmark'.toLowerCase() && (
        <AppceleratorOriginalWordmark />
      )}
      {componentName.toLowerCase() ===
        'AppceleratorPlainWordmark'.toLowerCase() && (
        <AppceleratorPlainWordmark />
      )}
      {componentName.toLowerCase() === 'AppleOriginal'.toLowerCase() && (
        <AppleOriginal />
      )}
      {componentName.toLowerCase() === 'AppwriteOriginal'.toLowerCase() && (
        <AppwriteOriginal />
      )}
      {componentName.toLowerCase() ===
        'AppwriteOriginalWordmark'.toLowerCase() && (
        <AppwriteOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'AppwritePlain'.toLowerCase() && (
        <AppwritePlain />
      )}
      {componentName.toLowerCase() ===
        'AppwritePlainWordmark'.toLowerCase() && <AppwritePlainWordmark />}
      {componentName.toLowerCase() === 'ArduinoOriginal'.toLowerCase() && (
        <ArduinoOriginal />
      )}
      {componentName.toLowerCase() ===
        'ArduinoOriginalWordmark'.toLowerCase() && <ArduinoOriginalWordmark />}
      {componentName.toLowerCase() === 'ArduinoPlain'.toLowerCase() && (
        <ArduinoPlain />
      )}
      {componentName.toLowerCase() === 'ArduinoPlainWordmark'.toLowerCase() && (
        <ArduinoPlainWordmark />
      )}
      {componentName.toLowerCase() === 'AtomOriginal'.toLowerCase() && (
        <AtomOriginal />
      )}
      {componentName.toLowerCase() === 'AtomOriginalWordmark'.toLowerCase() && (
        <AtomOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'AzureOriginal'.toLowerCase() && (
        <AzureOriginal />
      )}
      {componentName.toLowerCase() ===
        'AzureOriginalWordmark'.toLowerCase() && <AzureOriginalWordmark />}
      {componentName.toLowerCase() === 'AzurePlain'.toLowerCase() && (
        <AzurePlain />
      )}
      {componentName.toLowerCase() === 'AzurePlainWordmark'.toLowerCase() && (
        <AzurePlainWordmark />
      )}
      {componentName.toLowerCase() === 'BabelOriginal'.toLowerCase() && (
        <BabelOriginal />
      )}
      {componentName.toLowerCase() === 'BabelPlain'.toLowerCase() && (
        <BabelPlain />
      )}
      {componentName.toLowerCase() === 'BackbonejsOriginal'.toLowerCase() && (
        <BackbonejsOriginal />
      )}
      {componentName.toLowerCase() ===
        'BackbonejsOriginalWordmark'.toLowerCase() && (
        <BackbonejsOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'BackbonejsPlain'.toLowerCase() && (
        <BackbonejsPlain />
      )}
      {componentName.toLowerCase() ===
        'BackbonejsPlainWordmark'.toLowerCase() && <BackbonejsPlainWordmark />}
      {componentName.toLowerCase() === 'BashOriginal'.toLowerCase() && (
        <BashOriginal />
      )}
      {componentName.toLowerCase() === 'BashPlain'.toLowerCase() && (
        <BashPlain />
      )}
      {componentName.toLowerCase() === 'BehanceOriginal'.toLowerCase() && (
        <BehanceOriginal />
      )}
      {componentName.toLowerCase() ===
        'BehanceOriginalWordmark'.toLowerCase() && <BehanceOriginalWordmark />}
      {componentName.toLowerCase() === 'BehancePlain'.toLowerCase() && (
        <BehancePlain />
      )}
      {componentName.toLowerCase() === 'BehancePlainWordmark'.toLowerCase() && (
        <BehancePlainWordmark />
      )}
      {componentName.toLowerCase() === 'BitbucketOriginal'.toLowerCase() && (
        <BitbucketOriginal />
      )}
      {componentName.toLowerCase() ===
        'BitbucketOriginalWordmark'.toLowerCase() && (
        <BitbucketOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'BootstrapOriginal'.toLowerCase() && (
        <BootstrapOriginal />
      )}
      {componentName.toLowerCase() === 'BootstrapPlain'.toLowerCase() && (
        <BootstrapPlain />
      )}
      {componentName.toLowerCase() ===
        'BootstrapPlainWordmark'.toLowerCase() && <BootstrapPlainWordmark />}
      {componentName.toLowerCase() === 'BowerLine'.toLowerCase() && (
        <BowerLine />
      )}
      {componentName.toLowerCase() === 'BowerLineWordmark'.toLowerCase() && (
        <BowerLineWordmark />
      )}
      {componentName.toLowerCase() === 'BowerOriginal'.toLowerCase() && (
        <BowerOriginal />
      )}
      {componentName.toLowerCase() ===
        'BowerOriginalWordmark'.toLowerCase() && <BowerOriginalWordmark />}
      {componentName.toLowerCase() === 'BowerPlain'.toLowerCase() && (
        <BowerPlain />
      )}
      {componentName.toLowerCase() === 'BowerPlainWordmark'.toLowerCase() && (
        <BowerPlainWordmark />
      )}
      {componentName.toLowerCase() === 'BulmaPlain'.toLowerCase() && (
        <BulmaPlain />
      )}
      {componentName.toLowerCase() === 'CLine'.toLowerCase() && <CLine />}
      {componentName.toLowerCase() === 'COriginal'.toLowerCase() && (
        <COriginal />
      )}
      {componentName.toLowerCase() === 'CPlain'.toLowerCase() && <CPlain />}
      {componentName.toLowerCase() === 'CakephpOriginal'.toLowerCase() && (
        <CakephpOriginal />
      )}
      {componentName.toLowerCase() ===
        'CakephpOriginalWordmark'.toLowerCase() && <CakephpOriginalWordmark />}
      {componentName.toLowerCase() === 'CakephpPlain'.toLowerCase() && (
        <CakephpPlain />
      )}
      {componentName.toLowerCase() === 'CakephpPlainWordmark'.toLowerCase() && (
        <CakephpPlainWordmark />
      )}
      {componentName.toLowerCase() === 'CanvaOriginal'.toLowerCase() && (
        <CanvaOriginal />
      )}
      {componentName.toLowerCase() === 'CentosOriginal'.toLowerCase() && (
        <CentosOriginal />
      )}
      {componentName.toLowerCase() ===
        'CentosOriginalWordmark'.toLowerCase() && <CentosOriginalWordmark />}
      {componentName.toLowerCase() === 'CentosPlain'.toLowerCase() && (
        <CentosPlain />
      )}
      {componentName.toLowerCase() === 'CentosPlainWordmark'.toLowerCase() && (
        <CentosPlainWordmark />
      )}
      {componentName.toLowerCase() === 'CeylonOriginal'.toLowerCase() && (
        <CeylonOriginal />
      )}
      {componentName.toLowerCase() ===
        'CeylonOriginalWordmark'.toLowerCase() && <CeylonOriginalWordmark />}
      {componentName.toLowerCase() === 'CeylonPlain'.toLowerCase() && (
        <CeylonPlain />
      )}
      {componentName.toLowerCase() === 'CeylonPlainWordmark'.toLowerCase() && (
        <CeylonPlainWordmark />
      )}
      {componentName.toLowerCase() === 'ChromeOriginal'.toLowerCase() && (
        <ChromeOriginal />
      )}
      {componentName.toLowerCase() ===
        'ChromeOriginalWordmark'.toLowerCase() && <ChromeOriginalWordmark />}
      {componentName.toLowerCase() === 'ChromePlain'.toLowerCase() && (
        <ChromePlain />
      )}
      {componentName.toLowerCase() === 'ChromePlainWordmark'.toLowerCase() && (
        <ChromePlainWordmark />
      )}
      {componentName.toLowerCase() === 'CircleciPlain'.toLowerCase() && (
        <CircleciPlain />
      )}
      {componentName.toLowerCase() ===
        'CircleciPlainWordmark'.toLowerCase() && <CircleciPlainWordmark />}
      {componentName.toLowerCase() === 'ClojureLine'.toLowerCase() && (
        <ClojureLine />
      )}
      {componentName.toLowerCase() === 'ClojureOriginal'.toLowerCase() && (
        <ClojureOriginal />
      )}
      {componentName.toLowerCase() ===
        'ClojurescriptOriginal'.toLowerCase() && <ClojurescriptOriginal />}
      {componentName.toLowerCase() === 'ClojurescriptPlain'.toLowerCase() && (
        <ClojurescriptPlain />
      )}
      {componentName.toLowerCase() === 'CodecovPlain'.toLowerCase() && (
        <CodecovPlain />
      )}
      {componentName.toLowerCase() === 'CodeigniterPlain'.toLowerCase() && (
        <CodeigniterPlain />
      )}
      {componentName.toLowerCase() ===
        'CodeigniterPlainWordmark'.toLowerCase() && (
        <CodeigniterPlainWordmark />
      )}
      {componentName.toLowerCase() ===
        'CodepenOriginalWordmark'.toLowerCase() && <CodepenOriginalWordmark />}
      {componentName.toLowerCase() === 'CodepenPlain'.toLowerCase() && (
        <CodepenPlain />
      )}
      {componentName.toLowerCase() === 'CoffeescriptOriginal'.toLowerCase() && (
        <CoffeescriptOriginal />
      )}
      {componentName.toLowerCase() ===
        'CoffeescriptOriginalWordmark'.toLowerCase() && (
        <CoffeescriptOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'ComposerLine'.toLowerCase() && (
        <ComposerLine />
      )}
      {componentName.toLowerCase() === 'ComposerLineWordmark'.toLowerCase() && (
        <ComposerLineWordmark />
      )}
      {componentName.toLowerCase() === 'ComposerOriginal'.toLowerCase() && (
        <ComposerOriginal />
      )}
      {componentName.toLowerCase() === 'ConfluenceOriginal'.toLowerCase() && (
        <ConfluenceOriginal />
      )}
      {componentName.toLowerCase() ===
        'ConfluenceOriginalWordmark'.toLowerCase() && (
        <ConfluenceOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'CouchdbOriginal'.toLowerCase() && (
        <CouchdbOriginal />
      )}
      {componentName.toLowerCase() ===
        'CouchdbOriginalWordmark'.toLowerCase() && <CouchdbOriginalWordmark />}
      {componentName.toLowerCase() === 'CouchdbPlain'.toLowerCase() && (
        <CouchdbPlain />
      )}
      {componentName.toLowerCase() === 'CouchdbPlainWordmark'.toLowerCase() && (
        <CouchdbPlainWordmark />
      )}
      {componentName.toLowerCase() === 'CplusplusLine'.toLowerCase() && (
        <CplusplusLine />
      )}
      {componentName.toLowerCase() === 'CplusplusOriginal'.toLowerCase() && (
        <CplusplusOriginal />
      )}
      {componentName.toLowerCase() === 'CplusplusPlain'.toLowerCase() && (
        <CplusplusPlain />
      )}
      {componentName.toLowerCase() === 'CrystalOriginal'.toLowerCase() && (
        <CrystalOriginal />
      )}
      {componentName.toLowerCase() ===
        'CrystalOriginalWordmark'.toLowerCase() && <CrystalOriginalWordmark />}
      {componentName.toLowerCase() === 'CsharpLine'.toLowerCase() && (
        <CsharpLine />
      )}
      {componentName.toLowerCase() === 'CsharpOriginal'.toLowerCase() && (
        <CsharpOriginal />
      )}
      {componentName.toLowerCase() === 'CsharpPlain'.toLowerCase() && (
        <CsharpPlain />
      )}
      {componentName.toLowerCase() === 'Css3Original'.toLowerCase() && (
        <Css3Original />
      )}
      {componentName.toLowerCase() === 'Css3OriginalWordmark'.toLowerCase() && (
        <Css3OriginalWordmark />
      )}
      {componentName.toLowerCase() === 'Css3Plain'.toLowerCase() && (
        <Css3Plain />
      )}
      {componentName.toLowerCase() === 'Css3PlainWordmark'.toLowerCase() && (
        <Css3PlainWordmark />
      )}
      {componentName.toLowerCase() === 'CucumberPlain'.toLowerCase() && (
        <CucumberPlain />
      )}
      {componentName.toLowerCase() ===
        'CucumberPlainWordmark'.toLowerCase() && <CucumberPlainWordmark />}
      {componentName.toLowerCase() === 'D3JsOriginal'.toLowerCase() && (
        <D3JsOriginal />
      )}
      {componentName.toLowerCase() === 'D3JsPlain'.toLowerCase() && (
        <D3JsPlain />
      )}
      {componentName.toLowerCase() === 'DartOriginal'.toLowerCase() && (
        <DartOriginal />
      )}
      {componentName.toLowerCase() === 'DartOriginalWordmark'.toLowerCase() && (
        <DartOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'DartPlain'.toLowerCase() && (
        <DartPlain />
      )}
      {componentName.toLowerCase() === 'DartPlainWordmark'.toLowerCase() && (
        <DartPlainWordmark />
      )}
      {componentName.toLowerCase() === 'DebianOriginal'.toLowerCase() && (
        <DebianOriginal />
      )}
      {componentName.toLowerCase() ===
        'DebianOriginalWordmark'.toLowerCase() && <DebianOriginalWordmark />}
      {componentName.toLowerCase() === 'DebianPlain'.toLowerCase() && (
        <DebianPlain />
      )}
      {componentName.toLowerCase() === 'DebianPlainWordmark'.toLowerCase() && (
        <DebianPlainWordmark />
      )}
      {componentName.toLowerCase() === 'DenojsOriginal'.toLowerCase() && (
        <DenojsOriginal />
      )}
      {componentName.toLowerCase() ===
        'DenojsOriginalWordmark'.toLowerCase() && <DenojsOriginalWordmark />}
      {componentName.toLowerCase() === 'DeviconLine'.toLowerCase() && (
        <DeviconLine />
      )}
      {componentName.toLowerCase() === 'DeviconLineWordmark'.toLowerCase() && (
        <DeviconLineWordmark />
      )}
      {componentName.toLowerCase() === 'DeviconOriginal'.toLowerCase() && (
        <DeviconOriginal />
      )}
      {componentName.toLowerCase() ===
        'DeviconOriginalWordmark'.toLowerCase() && <DeviconOriginalWordmark />}
      {componentName.toLowerCase() === 'DeviconPlain'.toLowerCase() && (
        <DeviconPlain />
      )}
      {componentName.toLowerCase() === 'DeviconPlainWordmark'.toLowerCase() && (
        <DeviconPlainWordmark />
      )}
      {componentName.toLowerCase() === 'DigitaloceanOriginal'.toLowerCase() && (
        <DigitaloceanOriginal />
      )}
      {componentName.toLowerCase() ===
        'DigitaloceanOriginalWordmark'.toLowerCase() && (
        <DigitaloceanOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'DigitaloceanPlain'.toLowerCase() && (
        <DigitaloceanPlain />
      )}
      {componentName.toLowerCase() ===
        'DigitaloceanPlainWordmark'.toLowerCase() && (
        <DigitaloceanPlainWordmark />
      )}
      {componentName.toLowerCase() === 'DjangoLine'.toLowerCase() && (
        <DjangoLine />
      )}
      {componentName.toLowerCase() === 'DjangoOriginal'.toLowerCase() && (
        <DjangoOriginal />
      )}
      {componentName.toLowerCase() === 'DjangoPlain'.toLowerCase() && (
        <DjangoPlain />
      )}
      {componentName.toLowerCase() === 'DockerOriginal'.toLowerCase() && (
        <DockerOriginal />
      )}
      {componentName.toLowerCase() ===
        'DockerOriginalWordmark'.toLowerCase() && <DockerOriginalWordmark />}
      {componentName.toLowerCase() === 'DockerPlain'.toLowerCase() && (
        <DockerPlain />
      )}
      {componentName.toLowerCase() === 'DockerPlainWordmark'.toLowerCase() && (
        <DockerPlainWordmark />
      )}
      {componentName.toLowerCase() === 'DoctrineLine'.toLowerCase() && (
        <DoctrineLine />
      )}
      {componentName.toLowerCase() === 'DoctrineLineWordmark'.toLowerCase() && (
        <DoctrineLineWordmark />
      )}
      {componentName.toLowerCase() === 'DoctrineOriginal'.toLowerCase() && (
        <DoctrineOriginal />
      )}
      {componentName.toLowerCase() ===
        'DoctrineOriginalWordmark'.toLowerCase() && (
        <DoctrineOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'DoctrinePlain'.toLowerCase() && (
        <DoctrinePlain />
      )}
      {componentName.toLowerCase() ===
        'DoctrinePlainWordmark'.toLowerCase() && <DoctrinePlainWordmark />}
      {componentName.toLowerCase() === 'DotNetOriginal'.toLowerCase() && (
        <DotNetOriginal />
      )}
      {componentName.toLowerCase() ===
        'DotNetOriginalWordmark'.toLowerCase() && <DotNetOriginalWordmark />}
      {componentName.toLowerCase() === 'DotNetPlain'.toLowerCase() && (
        <DotNetPlain />
      )}
      {componentName.toLowerCase() === 'DotNetPlainWordmark'.toLowerCase() && (
        <DotNetPlainWordmark />
      )}
      {componentName.toLowerCase() === 'DotnetcoreOriginal'.toLowerCase() && (
        <DotnetcoreOriginal />
      )}
      {componentName.toLowerCase() === 'DotnetcorePlain'.toLowerCase() && (
        <DotnetcorePlain />
      )}
      {componentName.toLowerCase() === 'DrupalOriginal'.toLowerCase() && (
        <DrupalOriginal />
      )}
      {componentName.toLowerCase() ===
        'DrupalOriginalWordmark'.toLowerCase() && <DrupalOriginalWordmark />}
      {componentName.toLowerCase() === 'DrupalPlain'.toLowerCase() && (
        <DrupalPlain />
      )}
      {componentName.toLowerCase() === 'DrupalPlainWordmark'.toLowerCase() && (
        <DrupalPlainWordmark />
      )}
      {componentName.toLowerCase() === 'ElectronOriginal'.toLowerCase() && (
        <ElectronOriginal />
      )}
      {componentName.toLowerCase() ===
        'ElectronOriginalWordmark'.toLowerCase() && (
        <ElectronOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'EleventyOriginal'.toLowerCase() && (
        <EleventyOriginal />
      )}
      {componentName.toLowerCase() === 'EleventyPlain'.toLowerCase() && (
        <EleventyPlain />
      )}
      {componentName.toLowerCase() === 'ElixirOriginal'.toLowerCase() && (
        <ElixirOriginal />
      )}
      {componentName.toLowerCase() ===
        'ElixirOriginalWordmark'.toLowerCase() && <ElixirOriginalWordmark />}
      {componentName.toLowerCase() === 'ElixirPlain'.toLowerCase() && (
        <ElixirPlain />
      )}
      {componentName.toLowerCase() === 'ElixirPlainWordmark'.toLowerCase() && (
        <ElixirPlainWordmark />
      )}
      {componentName.toLowerCase() === 'ElmOriginal'.toLowerCase() && (
        <ElmOriginal />
      )}
      {componentName.toLowerCase() === 'ElmOriginalWordmark'.toLowerCase() && (
        <ElmOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'ElmPlain'.toLowerCase() && <ElmPlain />}
      {componentName.toLowerCase() === 'ElmPlainWordmark'.toLowerCase() && (
        <ElmPlainWordmark />
      )}
      {componentName.toLowerCase() === 'EmbeddedcOriginal'.toLowerCase() && (
        <EmbeddedcOriginal />
      )}
      {componentName.toLowerCase() ===
        'EmbeddedcOriginalWordmark'.toLowerCase() && (
        <EmbeddedcOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'EmbeddedcPlain'.toLowerCase() && (
        <EmbeddedcPlain />
      )}
      {componentName.toLowerCase() ===
        'EmbeddedcPlainWordmark'.toLowerCase() && <EmbeddedcPlainWordmark />}
      {componentName.toLowerCase() ===
        'EmberOriginalWordmark'.toLowerCase() && <EmberOriginalWordmark />}
      {componentName.toLowerCase() === 'ErlangOriginal'.toLowerCase() && (
        <ErlangOriginal />
      )}
      {componentName.toLowerCase() ===
        'ErlangOriginalWordmark'.toLowerCase() && <ErlangOriginalWordmark />}
      {componentName.toLowerCase() === 'ErlangPlain'.toLowerCase() && (
        <ErlangPlain />
      )}
      {componentName.toLowerCase() === 'ErlangPlainWordmark'.toLowerCase() && (
        <ErlangPlainWordmark />
      )}
      {componentName.toLowerCase() === 'ExpressOriginal'.toLowerCase() && (
        <ExpressOriginal />
      )}
      {componentName.toLowerCase() ===
        'ExpressOriginalWordmark'.toLowerCase() && <ExpressOriginalWordmark />}
      {componentName.toLowerCase() === 'FacebookOriginal'.toLowerCase() && (
        <FacebookOriginal />
      )}
      {componentName.toLowerCase() === 'FacebookPlain'.toLowerCase() && (
        <FacebookPlain />
      )}
      {componentName.toLowerCase() === 'FeathersjsOriginal'.toLowerCase() && (
        <FeathersjsOriginal />
      )}
      {componentName.toLowerCase() === 'FigmaOriginal'.toLowerCase() && (
        <FigmaOriginal />
      )}
      {componentName.toLowerCase() === 'FigmaPlain'.toLowerCase() && (
        <FigmaPlain />
      )}
      {componentName.toLowerCase() === 'FilezillaPlain'.toLowerCase() && (
        <FilezillaPlain />
      )}
      {componentName.toLowerCase() ===
        'FilezillaPlainWordmark'.toLowerCase() && <FilezillaPlainWordmark />}
      {componentName.toLowerCase() === 'FirebasePlain'.toLowerCase() && (
        <FirebasePlain />
      )}
      {componentName.toLowerCase() ===
        'FirebasePlainWordmark'.toLowerCase() && <FirebasePlainWordmark />}
      {componentName.toLowerCase() === 'FirefoxOriginal'.toLowerCase() && (
        <FirefoxOriginal />
      )}
      {componentName.toLowerCase() ===
        'FirefoxOriginalWordmark'.toLowerCase() && <FirefoxOriginalWordmark />}
      {componentName.toLowerCase() === 'FirefoxPlain'.toLowerCase() && (
        <FirefoxPlain />
      )}
      {componentName.toLowerCase() === 'FirefoxPlainWordmark'.toLowerCase() && (
        <FirefoxPlainWordmark />
      )}
      {componentName.toLowerCase() === 'FlaskOriginal'.toLowerCase() && (
        <FlaskOriginal />
      )}
      {componentName.toLowerCase() ===
        'FlaskOriginalWordmark'.toLowerCase() && <FlaskOriginalWordmark />}
      {componentName.toLowerCase() === 'FlutterOriginal'.toLowerCase() && (
        <FlutterOriginal />
      )}
      {componentName.toLowerCase() === 'FlutterPlain'.toLowerCase() && (
        <FlutterPlain />
      )}
      {componentName.toLowerCase() === 'FoundationOriginal'.toLowerCase() && (
        <FoundationOriginal />
      )}
      {componentName.toLowerCase() ===
        'FoundationOriginalWordmark'.toLowerCase() && (
        <FoundationOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'FoundationPlain'.toLowerCase() && (
        <FoundationPlain />
      )}
      {componentName.toLowerCase() ===
        'FoundationPlainWordmark'.toLowerCase() && <FoundationPlainWordmark />}
      {componentName.toLowerCase() === 'FsharpOriginal'.toLowerCase() && (
        <FsharpOriginal />
      )}
      {componentName.toLowerCase() === 'FsharpPlain'.toLowerCase() && (
        <FsharpPlain />
      )}
      {componentName.toLowerCase() === 'GatlingPlain'.toLowerCase() && (
        <GatlingPlain />
      )}
      {componentName.toLowerCase() === 'GatlingPlainWordmark'.toLowerCase() && (
        <GatlingPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GatsbyOriginal'.toLowerCase() && (
        <GatsbyOriginal />
      )}
      {componentName.toLowerCase() ===
        'GatsbyOriginalWordmark'.toLowerCase() && <GatsbyOriginalWordmark />}
      {componentName.toLowerCase() === 'GatsbyPlain'.toLowerCase() && (
        <GatsbyPlain />
      )}
      {componentName.toLowerCase() === 'GatsbyPlainWordmark'.toLowerCase() && (
        <GatsbyPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GccOriginal'.toLowerCase() && (
        <GccOriginal />
      )}
      {componentName.toLowerCase() === 'GccPlain'.toLowerCase() && <GccPlain />}
      {componentName.toLowerCase() === 'GimpOriginal'.toLowerCase() && (
        <GimpOriginal />
      )}
      {componentName.toLowerCase() === 'GimpOriginalWordmark'.toLowerCase() && (
        <GimpOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'GimpPlain'.toLowerCase() && (
        <GimpPlain />
      )}
      {componentName.toLowerCase() === 'GimpPlainWordmark'.toLowerCase() && (
        <GimpPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GitOriginal'.toLowerCase() && (
        <GitOriginal />
      )}
      {componentName.toLowerCase() === 'GitOriginalWordmark'.toLowerCase() && (
        <GitOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'GitPlain'.toLowerCase() && <GitPlain />}
      {componentName.toLowerCase() === 'GitPlainWordmark'.toLowerCase() && (
        <GitPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GithubOriginal'.toLowerCase() && (
        <GithubOriginal />
      )}
      {componentName.toLowerCase() ===
        'GithubOriginalWordmark'.toLowerCase() && <GithubOriginalWordmark />}
      {componentName.toLowerCase() === 'GitlabOriginal'.toLowerCase() && (
        <GitlabOriginal />
      )}
      {componentName.toLowerCase() ===
        'GitlabOriginalWordmark'.toLowerCase() && <GitlabOriginalWordmark />}
      {componentName.toLowerCase() === 'GitlabPlain'.toLowerCase() && (
        <GitlabPlain />
      )}
      {componentName.toLowerCase() === 'GitlabPlainWordmark'.toLowerCase() && (
        <GitlabPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GitterPlain'.toLowerCase() && (
        <GitterPlain />
      )}
      {componentName.toLowerCase() === 'GitterPlainWordmark'.toLowerCase() && (
        <GitterPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GoLine'.toLowerCase() && <GoLine />}
      {componentName.toLowerCase() === 'GoOriginal'.toLowerCase() && (
        <GoOriginal />
      )}
      {componentName.toLowerCase() === 'GoOriginalWordmark'.toLowerCase() && (
        <GoOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'GoPlain'.toLowerCase() && <GoPlain />}
      {componentName.toLowerCase() === 'GodotOriginal'.toLowerCase() && (
        <GodotOriginal />
      )}
      {componentName.toLowerCase() ===
        'GodotOriginalWordmark'.toLowerCase() && <GodotOriginalWordmark />}
      {componentName.toLowerCase() === 'GodotPlain'.toLowerCase() && (
        <GodotPlain />
      )}
      {componentName.toLowerCase() === 'GodotPlainWordmark'.toLowerCase() && (
        <GodotPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GoogleOriginal'.toLowerCase() && (
        <GoogleOriginal />
      )}
      {componentName.toLowerCase() ===
        'GoogleOriginalWordmark'.toLowerCase() && <GoogleOriginalWordmark />}
      {componentName.toLowerCase() === 'GooglePlain'.toLowerCase() && (
        <GooglePlain />
      )}
      {componentName.toLowerCase() === 'GooglePlainWordmark'.toLowerCase() && (
        <GooglePlainWordmark />
      )}
      {componentName.toLowerCase() === 'GooglecloudOriginal'.toLowerCase() && (
        <GooglecloudOriginal />
      )}
      {componentName.toLowerCase() ===
        'GooglecloudOriginalWordmark'.toLowerCase() && (
        <GooglecloudOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'GooglecloudPlain'.toLowerCase() && (
        <GooglecloudPlain />
      )}
      {componentName.toLowerCase() ===
        'GooglecloudPlainWordmark'.toLowerCase() && (
        <GooglecloudPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GradlePlain'.toLowerCase() && (
        <GradlePlain />
      )}
      {componentName.toLowerCase() === 'GradlePlainWordmark'.toLowerCase() && (
        <GradlePlainWordmark />
      )}
      {componentName.toLowerCase() === 'GrailsOriginal'.toLowerCase() && (
        <GrailsOriginal />
      )}
      {componentName.toLowerCase() === 'GrailsPlain'.toLowerCase() && (
        <GrailsPlain />
      )}
      {componentName.toLowerCase() === 'GraphqlPlain'.toLowerCase() && (
        <GraphqlPlain />
      )}
      {componentName.toLowerCase() === 'GraphqlPlainWordmark'.toLowerCase() && (
        <GraphqlPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GroovyOriginal'.toLowerCase() && (
        <GroovyOriginal />
      )}
      {componentName.toLowerCase() === 'GroovyPlain'.toLowerCase() && (
        <GroovyPlain />
      )}
      {componentName.toLowerCase() === 'GruntLine'.toLowerCase() && (
        <GruntLine />
      )}
      {componentName.toLowerCase() === 'GruntLineWordmark'.toLowerCase() && (
        <GruntLineWordmark />
      )}
      {componentName.toLowerCase() === 'GruntOriginal'.toLowerCase() && (
        <GruntOriginal />
      )}
      {componentName.toLowerCase() ===
        'GruntOriginalWordmark'.toLowerCase() && <GruntOriginalWordmark />}
      {componentName.toLowerCase() === 'GruntPlain'.toLowerCase() && (
        <GruntPlain />
      )}
      {componentName.toLowerCase() === 'GruntPlainWordmark'.toLowerCase() && (
        <GruntPlainWordmark />
      )}
      {componentName.toLowerCase() === 'GulpPlain'.toLowerCase() && (
        <GulpPlain />
      )}
      {componentName.toLowerCase() === 'HandlebarsOriginal'.toLowerCase() && (
        <HandlebarsOriginal />
      )}
      {componentName.toLowerCase() ===
        'HandlebarsOriginalWordmark'.toLowerCase() && (
        <HandlebarsOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'HaskellOriginal'.toLowerCase() && (
        <HaskellOriginal />
      )}
      {componentName.toLowerCase() ===
        'HaskellOriginalWordmark'.toLowerCase() && <HaskellOriginalWordmark />}
      {componentName.toLowerCase() === 'HaskellPlain'.toLowerCase() && (
        <HaskellPlain />
      )}
      {componentName.toLowerCase() === 'HaskellPlainWordmark'.toLowerCase() && (
        <HaskellPlainWordmark />
      )}
      {componentName.toLowerCase() === 'HaxeOriginal'.toLowerCase() && (
        <HaxeOriginal />
      )}
      {componentName.toLowerCase() === 'HaxePlain'.toLowerCase() && (
        <HaxePlain />
      )}
      {componentName.toLowerCase() === 'HerokuOriginal'.toLowerCase() && (
        <HerokuOriginal />
      )}
      {componentName.toLowerCase() ===
        'HerokuOriginalWordmark'.toLowerCase() && <HerokuOriginalWordmark />}
      {componentName.toLowerCase() === 'HerokuPlain'.toLowerCase() && (
        <HerokuPlain />
      )}
      {componentName.toLowerCase() === 'HerokuPlainWordmark'.toLowerCase() && (
        <HerokuPlainWordmark />
      )}
      {componentName.toLowerCase() === 'Html5Original'.toLowerCase() && (
        <Html5Original />
      )}
      {componentName.toLowerCase() ===
        'Html5OriginalWordmark'.toLowerCase() && <Html5OriginalWordmark />}
      {componentName.toLowerCase() === 'Html5Plain'.toLowerCase() && (
        <Html5Plain />
      )}
      {componentName.toLowerCase() === 'Html5PlainWordmark'.toLowerCase() && (
        <Html5PlainWordmark />
      )}
      {componentName.toLowerCase() === 'Ie10Original'.toLowerCase() && (
        <Ie10Original />
      )}
      {componentName.toLowerCase() === 'IllustratorLine'.toLowerCase() && (
        <IllustratorLine />
      )}
      {componentName.toLowerCase() === 'IllustratorPlain'.toLowerCase() && (
        <IllustratorPlain />
      )}
      {componentName.toLowerCase() === 'InkscapeOriginal'.toLowerCase() && (
        <InkscapeOriginal />
      )}
      {componentName.toLowerCase() ===
        'InkscapeOriginalWordmark'.toLowerCase() && (
        <InkscapeOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'InkscapePlain'.toLowerCase() && (
        <InkscapePlain />
      )}
      {componentName.toLowerCase() ===
        'InkscapePlainWordmark'.toLowerCase() && <InkscapePlainWordmark />}
      {componentName.toLowerCase() === 'IntellijOriginal'.toLowerCase() && (
        <IntellijOriginal />
      )}
      {componentName.toLowerCase() ===
        'IntellijOriginalWordmark'.toLowerCase() && (
        <IntellijOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'IntellijPlain'.toLowerCase() && (
        <IntellijPlain />
      )}
      {componentName.toLowerCase() ===
        'IntellijPlainWordmark'.toLowerCase() && <IntellijPlainWordmark />}
      {componentName.toLowerCase() === 'IonicOriginal'.toLowerCase() && (
        <IonicOriginal />
      )}
      {componentName.toLowerCase() ===
        'IonicOriginalWordmark'.toLowerCase() && <IonicOriginalWordmark />}
      {componentName.toLowerCase() === 'JamstackOriginal'.toLowerCase() && (
        <JamstackOriginal />
      )}
      {componentName.toLowerCase() ===
        'JamstackOriginalWordmark'.toLowerCase() && (
        <JamstackOriginalWordmark />
      )}
      {componentName.toLowerCase() ===
        'JamstackPlainWordmark'.toLowerCase() && <JamstackPlainWordmark />}
      {componentName.toLowerCase() === 'JasminePlain'.toLowerCase() && (
        <JasminePlain />
      )}
      {componentName.toLowerCase() === 'JasminePlainWordmark'.toLowerCase() && (
        <JasminePlainWordmark />
      )}
      {componentName.toLowerCase() === 'JavaOriginal'.toLowerCase() && (
        <JavaOriginal />
      )}
      {componentName.toLowerCase() === 'JavaOriginalWordmark'.toLowerCase() && (
        <JavaOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'JavaPlain'.toLowerCase() && (
        <JavaPlain />
      )}
      {componentName.toLowerCase() === 'JavaPlainWordmark'.toLowerCase() && (
        <JavaPlainWordmark />
      )}
      {componentName.toLowerCase() === 'JavascriptOriginal'.toLowerCase() && (
        <JavascriptOriginal />
      )}
      {componentName.toLowerCase() === 'JavascriptPlain'.toLowerCase() && (
        <JavascriptPlain />
      )}
      {componentName.toLowerCase() === 'JeetOriginal'.toLowerCase() && (
        <JeetOriginal />
      )}
      {componentName.toLowerCase() === 'JeetOriginalWordmark'.toLowerCase() && (
        <JeetOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'JeetPlain'.toLowerCase() && (
        <JeetPlain />
      )}
      {componentName.toLowerCase() === 'JeetPlainWordmark'.toLowerCase() && (
        <JeetPlainWordmark />
      )}
      {componentName.toLowerCase() === 'JenkinsLine'.toLowerCase() && (
        <JenkinsLine />
      )}
      {componentName.toLowerCase() === 'JenkinsOriginal'.toLowerCase() && (
        <JenkinsOriginal />
      )}
      {componentName.toLowerCase() === 'JenkinsPlain'.toLowerCase() && (
        <JenkinsPlain />
      )}
      {componentName.toLowerCase() === 'JestPlain'.toLowerCase() && (
        <JestPlain />
      )}
      {componentName.toLowerCase() === 'JetbrainsOriginal'.toLowerCase() && (
        <JetbrainsOriginal />
      )}
      {componentName.toLowerCase() === 'JetbrainsPlain'.toLowerCase() && (
        <JetbrainsPlain />
      )}
      {componentName.toLowerCase() === 'JiraOriginal'.toLowerCase() && (
        <JiraOriginal />
      )}
      {componentName.toLowerCase() === 'JiraOriginalWordmark'.toLowerCase() && (
        <JiraOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'JiraPlain'.toLowerCase() && (
        <JiraPlain />
      )}
      {componentName.toLowerCase() === 'JiraPlainWordmark'.toLowerCase() && (
        <JiraPlainWordmark />
      )}
      {componentName.toLowerCase() === 'JqueryOriginal'.toLowerCase() && (
        <JqueryOriginal />
      )}
      {componentName.toLowerCase() ===
        'JqueryOriginalWordmark'.toLowerCase() && <JqueryOriginalWordmark />}
      {componentName.toLowerCase() === 'JqueryPlain'.toLowerCase() && (
        <JqueryPlain />
      )}
      {componentName.toLowerCase() === 'JqueryPlainWordmark'.toLowerCase() && (
        <JqueryPlainWordmark />
      )}
      {componentName.toLowerCase() === 'JuliaOriginal'.toLowerCase() && (
        <JuliaOriginal />
      )}
      {componentName.toLowerCase() ===
        'JuliaOriginalWordmark'.toLowerCase() && <JuliaOriginalWordmark />}
      {componentName.toLowerCase() === 'JuliaPlain'.toLowerCase() && (
        <JuliaPlain />
      )}
      {componentName.toLowerCase() === 'JuliaPlainWordmark'.toLowerCase() && (
        <JuliaPlainWordmark />
      )}
      {componentName.toLowerCase() === 'JupyterOriginal'.toLowerCase() && (
        <JupyterOriginal />
      )}
      {componentName.toLowerCase() ===
        'JupyterOriginalWordmark'.toLowerCase() && <JupyterOriginalWordmark />}
      {componentName.toLowerCase() === 'JupyterPlain'.toLowerCase() && (
        <JupyterPlain />
      )}
      {componentName.toLowerCase() === 'JupyterPlainWordmark'.toLowerCase() && (
        <JupyterPlainWordmark />
      )}
      {componentName.toLowerCase() === 'KarmaOriginal'.toLowerCase() && (
        <KarmaOriginal />
      )}
      {componentName.toLowerCase() === 'KarmaPlain'.toLowerCase() && (
        <KarmaPlain />
      )}
      {componentName.toLowerCase() ===
        'KnockoutPlainWordmark'.toLowerCase() && <KnockoutPlainWordmark />}
      {componentName.toLowerCase() === 'KotlinOriginal'.toLowerCase() && (
        <KotlinOriginal />
      )}
      {componentName.toLowerCase() ===
        'KotlinOriginalWordmark'.toLowerCase() && <KotlinOriginalWordmark />}
      {componentName.toLowerCase() === 'KotlinPlain'.toLowerCase() && (
        <KotlinPlain />
      )}
      {componentName.toLowerCase() === 'KotlinPlainWordmark'.toLowerCase() && (
        <KotlinPlainWordmark />
      )}
      {componentName.toLowerCase() === 'KrakenjsOriginal'.toLowerCase() && (
        <KrakenjsOriginal />
      )}
      {componentName.toLowerCase() ===
        'KrakenjsOriginalWordmark'.toLowerCase() && (
        <KrakenjsOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'KrakenjsPlain'.toLowerCase() && (
        <KrakenjsPlain />
      )}
      {componentName.toLowerCase() ===
        'KrakenjsPlainWordmark'.toLowerCase() && <KrakenjsPlainWordmark />}
      {componentName.toLowerCase() === 'KubernetesPlain'.toLowerCase() && (
        <KubernetesPlain />
      )}
      {componentName.toLowerCase() ===
        'KubernetesPlainWordmark'.toLowerCase() && <KubernetesPlainWordmark />}
      {componentName.toLowerCase() === 'LabviewOriginal'.toLowerCase() && (
        <LabviewOriginal />
      )}
      {componentName.toLowerCase() ===
        'LabviewOriginalWordmark'.toLowerCase() && <LabviewOriginalWordmark />}
      {componentName.toLowerCase() === 'LabviewPlain'.toLowerCase() && (
        <LabviewPlain />
      )}
      {componentName.toLowerCase() === 'LabviewPlainWordmark'.toLowerCase() && (
        <LabviewPlainWordmark />
      )}
      {componentName.toLowerCase() === 'LaravelPlain'.toLowerCase() && (
        <LaravelPlain />
      )}
      {componentName.toLowerCase() === 'LaravelPlainWordmark'.toLowerCase() && (
        <LaravelPlainWordmark />
      )}
      {componentName.toLowerCase() === 'LessPlainWordmark'.toLowerCase() && (
        <LessPlainWordmark />
      )}
      {componentName.toLowerCase() === 'LinkedinOriginal'.toLowerCase() && (
        <LinkedinOriginal />
      )}
      {componentName.toLowerCase() ===
        'LinkedinOriginalWordmark'.toLowerCase() && (
        <LinkedinOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'LinkedinPlain'.toLowerCase() && (
        <LinkedinPlain />
      )}
      {componentName.toLowerCase() ===
        'LinkedinPlainWordmark'.toLowerCase() && <LinkedinPlainWordmark />}
      {componentName.toLowerCase() === 'LinuxOriginal'.toLowerCase() && (
        <LinuxOriginal />
      )}
      {componentName.toLowerCase() === 'LinuxPlain'.toLowerCase() && (
        <LinuxPlain />
      )}
      {componentName.toLowerCase() === 'LuaOriginal'.toLowerCase() && (
        <LuaOriginal />
      )}
      {componentName.toLowerCase() === 'LuaOriginalWordmark'.toLowerCase() && (
        <LuaOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'LuaPlain'.toLowerCase() && <LuaPlain />}
      {componentName.toLowerCase() === 'LuaPlainWordmark'.toLowerCase() && (
        <LuaPlainWordmark />
      )}
      {componentName.toLowerCase() === 'MagentoLine'.toLowerCase() && (
        <MagentoLine />
      )}
      {componentName.toLowerCase() === 'MagentoOriginal'.toLowerCase() && (
        <MagentoOriginal />
      )}
      {componentName.toLowerCase() ===
        'MagentoOriginalWordmark'.toLowerCase() && <MagentoOriginalWordmark />}
      {componentName.toLowerCase() === 'MarkdownOriginal'.toLowerCase() && (
        <MarkdownOriginal />
      )}
      {componentName.toLowerCase() === 'MaterialuiOriginal'.toLowerCase() && (
        <MaterialuiOriginal />
      )}
      {componentName.toLowerCase() === 'MaterialuiPlain'.toLowerCase() && (
        <MaterialuiPlain />
      )}
      {componentName.toLowerCase() === 'MatlabLine'.toLowerCase() && (
        <MatlabLine />
      )}
      {componentName.toLowerCase() === 'MatlabOriginal'.toLowerCase() && (
        <MatlabOriginal />
      )}
      {componentName.toLowerCase() === 'MatlabPlain'.toLowerCase() && (
        <MatlabPlain />
      )}
      {componentName.toLowerCase() === 'MeteorOriginal'.toLowerCase() && (
        <MeteorOriginal />
      )}
      {componentName.toLowerCase() ===
        'MeteorOriginalWordmark'.toLowerCase() && <MeteorOriginalWordmark />}
      {componentName.toLowerCase() === 'MeteorPlain'.toLowerCase() && (
        <MeteorPlain />
      )}
      {componentName.toLowerCase() === 'MeteorPlainWordmark'.toLowerCase() && (
        <MeteorPlainWordmark />
      )}
      {componentName.toLowerCase() ===
        'MicrosoftsqlserverPlain'.toLowerCase() && <MicrosoftsqlserverPlain />}
      {componentName.toLowerCase() ===
        'MicrosoftsqlserverPlainWordmark'.toLowerCase() && (
        <MicrosoftsqlserverPlainWordmark />
      )}
      {componentName.toLowerCase() === 'MinitabOriginal'.toLowerCase() && (
        <MinitabOriginal />
      )}
      {componentName.toLowerCase() === 'MinitabPlain'.toLowerCase() && (
        <MinitabPlain />
      )}
      {componentName.toLowerCase() === 'MochaPlain'.toLowerCase() && (
        <MochaPlain />
      )}
      {componentName.toLowerCase() === 'ModxOriginal'.toLowerCase() && (
        <ModxOriginal />
      )}
      {componentName.toLowerCase() === 'ModxOriginalWordmark'.toLowerCase() && (
        <ModxOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'ModxPlain'.toLowerCase() && (
        <ModxPlain />
      )}
      {componentName.toLowerCase() === 'ModxPlainWordmark'.toLowerCase() && (
        <ModxPlainWordmark />
      )}
      {componentName.toLowerCase() === 'MongodbOriginal'.toLowerCase() && (
        <MongodbOriginal />
      )}
      {componentName.toLowerCase() ===
        'MongodbOriginalWordmark'.toLowerCase() && <MongodbOriginalWordmark />}
      {componentName.toLowerCase() === 'MongodbPlain'.toLowerCase() && (
        <MongodbPlain />
      )}
      {componentName.toLowerCase() === 'MongodbPlainWordmark'.toLowerCase() && (
        <MongodbPlainWordmark />
      )}
      {componentName.toLowerCase() === 'MoodleOriginal'.toLowerCase() && (
        <MoodleOriginal />
      )}
      {componentName.toLowerCase() ===
        'MoodleOriginalWordmark'.toLowerCase() && <MoodleOriginalWordmark />}
      {componentName.toLowerCase() === 'MoodlePlain'.toLowerCase() && (
        <MoodlePlain />
      )}
      {componentName.toLowerCase() === 'MoodlePlainWordmark'.toLowerCase() && (
        <MoodlePlainWordmark />
      )}
      {componentName.toLowerCase() === 'MsdosLine'.toLowerCase() && (
        <MsdosLine />
      )}
      {componentName.toLowerCase() === 'MsdosOriginal'.toLowerCase() && (
        <MsdosOriginal />
      )}
      {componentName.toLowerCase() === 'MsdosPlain'.toLowerCase() && (
        <MsdosPlain />
      )}
      {componentName.toLowerCase() === 'MysqlOriginal'.toLowerCase() && (
        <MysqlOriginal />
      )}
      {componentName.toLowerCase() ===
        'MysqlOriginalWordmark'.toLowerCase() && <MysqlOriginalWordmark />}
      {componentName.toLowerCase() === 'MysqlPlain'.toLowerCase() && (
        <MysqlPlain />
      )}
      {componentName.toLowerCase() === 'MysqlPlainWordmark'.toLowerCase() && (
        <MysqlPlainWordmark />
      )}
      {componentName.toLowerCase() === 'Neo4JOriginal'.toLowerCase() && (
        <Neo4JOriginal />
      )}
      {componentName.toLowerCase() ===
        'Neo4JOriginalWordmark'.toLowerCase() && <Neo4JOriginalWordmark />}
      {componentName.toLowerCase() === 'Neo4JPlain'.toLowerCase() && (
        <Neo4JPlain />
      )}
      {componentName.toLowerCase() === 'Neo4JPlainWordmark'.toLowerCase() && (
        <Neo4JPlainWordmark />
      )}
      {componentName.toLowerCase() === 'NestjsPlain'.toLowerCase() && (
        <NestjsPlain />
      )}
      {componentName.toLowerCase() === 'NestjsPlainWordmark'.toLowerCase() && (
        <NestjsPlainWordmark />
      )}
      {componentName.toLowerCase() === 'NextjsLine'.toLowerCase() && (
        <NextjsLine />
      )}
      {componentName.toLowerCase() === 'NextjsOriginal'.toLowerCase() && (
        <NextjsOriginal />
      )}
      {componentName.toLowerCase() ===
        'NextjsOriginalWordmark'.toLowerCase() && <NextjsOriginalWordmark />}
      {componentName.toLowerCase() === 'NginxOriginal'.toLowerCase() && (
        <NginxOriginal />
      )}
      {componentName.toLowerCase() === 'NixosOriginal'.toLowerCase() && (
        <NixosOriginal />
      )}
      {componentName.toLowerCase() ===
        'NixosOriginalWordmark'.toLowerCase() && <NixosOriginalWordmark />}
      {componentName.toLowerCase() === 'NixosPlain'.toLowerCase() && (
        <NixosPlain />
      )}
      {componentName.toLowerCase() === 'NixosPlainWordmark'.toLowerCase() && (
        <NixosPlainWordmark />
      )}
      {componentName.toLowerCase() === 'NodejsOriginal'.toLowerCase() && (
        <NodejsOriginal />
      )}
      {componentName.toLowerCase() ===
        'NodejsOriginalWordmark'.toLowerCase() && <NodejsOriginalWordmark />}
      {componentName.toLowerCase() === 'NodejsPlain'.toLowerCase() && (
        <NodejsPlain />
      )}
      {componentName.toLowerCase() === 'NodejsPlainWordmark'.toLowerCase() && (
        <NodejsPlainWordmark />
      )}
      {componentName.toLowerCase() === 'NodewebkitLine'.toLowerCase() && (
        <NodewebkitLine />
      )}
      {componentName.toLowerCase() ===
        'NodewebkitLineWordmark'.toLowerCase() && <NodewebkitLineWordmark />}
      {componentName.toLowerCase() === 'NodewebkitOriginal'.toLowerCase() && (
        <NodewebkitOriginal />
      )}
      {componentName.toLowerCase() ===
        'NodewebkitOriginalWordmark'.toLowerCase() && (
        <NodewebkitOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'NodewebkitPlain'.toLowerCase() && (
        <NodewebkitPlain />
      )}
      {componentName.toLowerCase() ===
        'NodewebkitPlainWordmark'.toLowerCase() && <NodewebkitPlainWordmark />}
      {componentName.toLowerCase() === 'NpmOriginalWordmark'.toLowerCase() && (
        <NpmOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'NumpyOriginal'.toLowerCase() && (
        <NumpyOriginal />
      )}
      {componentName.toLowerCase() ===
        'NumpyOriginalWordmark'.toLowerCase() && <NumpyOriginalWordmark />}
      {componentName.toLowerCase() === 'NuxtjsOriginal'.toLowerCase() && (
        <NuxtjsOriginal />
      )}
      {componentName.toLowerCase() ===
        'NuxtjsOriginalWordmark'.toLowerCase() && <NuxtjsOriginalWordmark />}
      {componentName.toLowerCase() === 'NuxtjsPlain'.toLowerCase() && (
        <NuxtjsPlain />
      )}
      {componentName.toLowerCase() === 'NuxtjsPlainWordmark'.toLowerCase() && (
        <NuxtjsPlainWordmark />
      )}
      {componentName.toLowerCase() === 'ObjectivecPlain'.toLowerCase() && (
        <ObjectivecPlain />
      )}
      {componentName.toLowerCase() === 'OcamlOriginal'.toLowerCase() && (
        <OcamlOriginal />
      )}
      {componentName.toLowerCase() ===
        'OcamlOriginalWordmark'.toLowerCase() && <OcamlOriginalWordmark />}
      {componentName.toLowerCase() === 'OcamlPlain'.toLowerCase() && (
        <OcamlPlain />
      )}
      {componentName.toLowerCase() === 'OcamlPlainWordmark'.toLowerCase() && (
        <OcamlPlainWordmark />
      )}
      {componentName.toLowerCase() === 'OpenglOriginal'.toLowerCase() && (
        <OpenglOriginal />
      )}
      {componentName.toLowerCase() === 'OpenglPlain'.toLowerCase() && (
        <OpenglPlain />
      )}
      {componentName.toLowerCase() === 'OperaOriginal'.toLowerCase() && (
        <OperaOriginal />
      )}
      {componentName.toLowerCase() ===
        'OperaOriginalWordmark'.toLowerCase() && <OperaOriginalWordmark />}
      {componentName.toLowerCase() === 'OperaPlain'.toLowerCase() && (
        <OperaPlain />
      )}
      {componentName.toLowerCase() === 'OperaPlainWordmark'.toLowerCase() && (
        <OperaPlainWordmark />
      )}
      {componentName.toLowerCase() === 'OracleOriginal'.toLowerCase() && (
        <OracleOriginal />
      )}
      {componentName.toLowerCase() === 'PandasOriginal'.toLowerCase() && (
        <PandasOriginal />
      )}
      {componentName.toLowerCase() ===
        'PandasOriginalWordmark'.toLowerCase() && <PandasOriginalWordmark />}
      {componentName.toLowerCase() === 'PerlOriginal'.toLowerCase() && (
        <PerlOriginal />
      )}
      {componentName.toLowerCase() === 'PerlPlain'.toLowerCase() && (
        <PerlPlain />
      )}
      {componentName.toLowerCase() === 'PhalconOriginal'.toLowerCase() && (
        <PhalconOriginal />
      )}
      {componentName.toLowerCase() === 'PhalconPlain'.toLowerCase() && (
        <PhalconPlain />
      )}
      {componentName.toLowerCase() === 'PhoenixOriginal'.toLowerCase() && (
        <PhoenixOriginal />
      )}
      {componentName.toLowerCase() ===
        'PhoenixOriginalWordmark'.toLowerCase() && <PhoenixOriginalWordmark />}
      {componentName.toLowerCase() === 'PhoenixPlain'.toLowerCase() && (
        <PhoenixPlain />
      )}
      {componentName.toLowerCase() === 'PhoenixPlainWordmark'.toLowerCase() && (
        <PhoenixPlainWordmark />
      )}
      {componentName.toLowerCase() === 'PhotoshopLine'.toLowerCase() && (
        <PhotoshopLine />
      )}
      {componentName.toLowerCase() === 'PhotoshopPlain'.toLowerCase() && (
        <PhotoshopPlain />
      )}
      {componentName.toLowerCase() === 'PhpOriginal'.toLowerCase() && (
        <PhpOriginal />
      )}
      {componentName.toLowerCase() === 'PhpPlain'.toLowerCase() && <PhpPlain />}
      {componentName.toLowerCase() === 'PhpstormOriginal'.toLowerCase() && (
        <PhpstormOriginal />
      )}
      {componentName.toLowerCase() ===
        'PhpstormOriginalWordmark'.toLowerCase() && (
        <PhpstormOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'PhpstormPlain'.toLowerCase() && (
        <PhpstormPlain />
      )}
      {componentName.toLowerCase() ===
        'PhpstormPlainWordmark'.toLowerCase() && <PhpstormPlainWordmark />}
      {componentName.toLowerCase() === 'PostgresqlOriginal'.toLowerCase() && (
        <PostgresqlOriginal />
      )}
      {componentName.toLowerCase() ===
        'PostgresqlOriginalWordmark'.toLowerCase() && (
        <PostgresqlOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'PostgresqlPlain'.toLowerCase() && (
        <PostgresqlPlain />
      )}
      {componentName.toLowerCase() ===
        'PostgresqlPlainWordmark'.toLowerCase() && <PostgresqlPlainWordmark />}
      {componentName.toLowerCase() === 'PremiereproOriginal'.toLowerCase() && (
        <PremiereproOriginal />
      )}
      {componentName.toLowerCase() === 'PremiereproPlain'.toLowerCase() && (
        <PremiereproPlain />
      )}
      {componentName.toLowerCase() === 'ProcessingOriginal'.toLowerCase() && (
        <ProcessingOriginal />
      )}
      {componentName.toLowerCase() ===
        'ProcessingOriginalWordmark'.toLowerCase() && (
        <ProcessingOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'ProcessingPlain'.toLowerCase() && (
        <ProcessingPlain />
      )}
      {componentName.toLowerCase() ===
        'ProcessingPlainWordmark'.toLowerCase() && <ProcessingPlainWordmark />}
      {componentName.toLowerCase() === 'ProtractorPlain'.toLowerCase() && (
        <ProtractorPlain />
      )}
      {componentName.toLowerCase() ===
        'ProtractorPlainWordmark'.toLowerCase() && <ProtractorPlainWordmark />}
      {componentName.toLowerCase() === 'PuttyOriginal'.toLowerCase() && (
        <PuttyOriginal />
      )}
      {componentName.toLowerCase() === 'PuttyPlain'.toLowerCase() && (
        <PuttyPlain />
      )}
      {componentName.toLowerCase() === 'PycharmOriginal'.toLowerCase() && (
        <PycharmOriginal />
      )}
      {componentName.toLowerCase() ===
        'PycharmOriginalWordmark'.toLowerCase() && <PycharmOriginalWordmark />}
      {componentName.toLowerCase() === 'PycharmPlain'.toLowerCase() && (
        <PycharmPlain />
      )}
      {componentName.toLowerCase() === 'PycharmPlainWordmark'.toLowerCase() && (
        <PycharmPlainWordmark />
      )}
      {componentName.toLowerCase() === 'PythonOriginal'.toLowerCase() && (
        <PythonOriginal />
      )}
      {componentName.toLowerCase() ===
        'PythonOriginalWordmark'.toLowerCase() && <PythonOriginalWordmark />}
      {componentName.toLowerCase() === 'PythonPlain'.toLowerCase() && (
        <PythonPlain />
      )}
      {componentName.toLowerCase() === 'PythonPlainWordmark'.toLowerCase() && (
        <PythonPlainWordmark />
      )}
      {componentName.toLowerCase() === 'QtOriginal'.toLowerCase() && (
        <QtOriginal />
      )}
      {componentName.toLowerCase() === 'ROriginal'.toLowerCase() && (
        <ROriginal />
      )}
      {componentName.toLowerCase() === 'RPlain'.toLowerCase() && <RPlain />}
      {componentName.toLowerCase() ===
        'RailsOriginalWordmark'.toLowerCase() && <RailsOriginalWordmark />}
      {componentName.toLowerCase() === 'RailsPlain'.toLowerCase() && (
        <RailsPlain />
      )}
      {componentName.toLowerCase() === 'RailsPlainWordmark'.toLowerCase() && (
        <RailsPlainWordmark />
      )}
      {componentName.toLowerCase() === 'RaspberrypiLine'.toLowerCase() && (
        <RaspberrypiLine />
      )}
      {componentName.toLowerCase() ===
        'RaspberrypiLineWordmark'.toLowerCase() && <RaspberrypiLineWordmark />}
      {componentName.toLowerCase() === 'RaspberrypiOriginal'.toLowerCase() && (
        <RaspberrypiOriginal />
      )}
      {componentName.toLowerCase() ===
        'RaspberrypiOriginalWordmark'.toLowerCase() && (
        <RaspberrypiOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'ReactOriginal'.toLowerCase() && (
        <ReactOriginal />
      )}
      {componentName.toLowerCase() ===
        'ReactOriginalWordmark'.toLowerCase() && <ReactOriginalWordmark />}
      {componentName.toLowerCase() === 'RedhatOriginal'.toLowerCase() && (
        <RedhatOriginal />
      )}
      {componentName.toLowerCase() ===
        'RedhatOriginalWordmark'.toLowerCase() && <RedhatOriginalWordmark />}
      {componentName.toLowerCase() === 'RedhatPlain'.toLowerCase() && (
        <RedhatPlain />
      )}
      {componentName.toLowerCase() === 'RedhatPlainWordmark'.toLowerCase() && (
        <RedhatPlainWordmark />
      )}
      {componentName.toLowerCase() === 'RedisOriginal'.toLowerCase() && (
        <RedisOriginal />
      )}
      {componentName.toLowerCase() ===
        'RedisOriginalWordmark'.toLowerCase() && <RedisOriginalWordmark />}
      {componentName.toLowerCase() === 'RedisPlain'.toLowerCase() && (
        <RedisPlain />
      )}
      {componentName.toLowerCase() === 'RedisPlainWordmark'.toLowerCase() && (
        <RedisPlainWordmark />
      )}
      {componentName.toLowerCase() === 'ReduxOriginal'.toLowerCase() && (
        <ReduxOriginal />
      )}
      {componentName.toLowerCase() === 'RocksdbPlain'.toLowerCase() && (
        <RocksdbPlain />
      )}
      {componentName.toLowerCase() === 'RstudioOriginal'.toLowerCase() && (
        <RstudioOriginal />
      )}
      {componentName.toLowerCase() === 'RstudioPlain'.toLowerCase() && (
        <RstudioPlain />
      )}
      {componentName.toLowerCase() === 'RubyOriginal'.toLowerCase() && (
        <RubyOriginal />
      )}
      {componentName.toLowerCase() === 'RubyOriginalWordmark'.toLowerCase() && (
        <RubyOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'RubyPlain'.toLowerCase() && (
        <RubyPlain />
      )}
      {componentName.toLowerCase() === 'RubyPlainWordmark'.toLowerCase() && (
        <RubyPlainWordmark />
      )}
      {componentName.toLowerCase() === 'RubymineOriginal'.toLowerCase() && (
        <RubymineOriginal />
      )}
      {componentName.toLowerCase() ===
        'RubymineOriginalWordmark'.toLowerCase() && (
        <RubymineOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'RubyminePlain'.toLowerCase() && (
        <RubyminePlain />
      )}
      {componentName.toLowerCase() ===
        'RubyminePlainWordmark'.toLowerCase() && <RubyminePlainWordmark />}
      {componentName.toLowerCase() === 'RustPlain'.toLowerCase() && (
        <RustPlain />
      )}
      {componentName.toLowerCase() === 'SafariLine'.toLowerCase() && (
        <SafariLine />
      )}
      {componentName.toLowerCase() === 'SafariLineWordmark'.toLowerCase() && (
        <SafariLineWordmark />
      )}
      {componentName.toLowerCase() === 'SafariOriginal'.toLowerCase() && (
        <SafariOriginal />
      )}
      {componentName.toLowerCase() ===
        'SafariOriginalWordmark'.toLowerCase() && <SafariOriginalWordmark />}
      {componentName.toLowerCase() === 'SafariPlain'.toLowerCase() && (
        <SafariPlain />
      )}
      {componentName.toLowerCase() === 'SafariPlainWordmark'.toLowerCase() && (
        <SafariPlainWordmark />
      )}
      {componentName.toLowerCase() === 'SalesforceOriginal'.toLowerCase() && (
        <SalesforceOriginal />
      )}
      {componentName.toLowerCase() === 'SalesforcePlain'.toLowerCase() && (
        <SalesforcePlain />
      )}
      {componentName.toLowerCase() === 'SassOriginal'.toLowerCase() && (
        <SassOriginal />
      )}
      {componentName.toLowerCase() === 'ScalaOriginal'.toLowerCase() && (
        <ScalaOriginal />
      )}
      {componentName.toLowerCase() ===
        'ScalaOriginalWordmark'.toLowerCase() && <ScalaOriginalWordmark />}
      {componentName.toLowerCase() === 'ScalaPlain'.toLowerCase() && (
        <ScalaPlain />
      )}
      {componentName.toLowerCase() === 'ScalaPlainWordmark'.toLowerCase() && (
        <ScalaPlainWordmark />
      )}
      {componentName.toLowerCase() === 'SequelizeOriginal'.toLowerCase() && (
        <SequelizeOriginal />
      )}
      {componentName.toLowerCase() ===
        'SequelizeOriginalWordmark'.toLowerCase() && (
        <SequelizeOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'SequelizePlain'.toLowerCase() && (
        <SequelizePlain />
      )}
      {componentName.toLowerCase() ===
        'SequelizePlainWordmark'.toLowerCase() && <SequelizePlainWordmark />}
      {componentName.toLowerCase() === 'ShopwareOriginal'.toLowerCase() && (
        <ShopwareOriginal />
      )}
      {componentName.toLowerCase() ===
        'ShopwareOriginalWordmark'.toLowerCase() && (
        <ShopwareOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'SketchLine'.toLowerCase() && (
        <SketchLine />
      )}
      {componentName.toLowerCase() === 'SketchLineWordmark'.toLowerCase() && (
        <SketchLineWordmark />
      )}
      {componentName.toLowerCase() === 'SketchOriginal'.toLowerCase() && (
        <SketchOriginal />
      )}
      {componentName.toLowerCase() ===
        'SketchOriginalWordmark'.toLowerCase() && <SketchOriginalWordmark />}
      {componentName.toLowerCase() === 'SlackOriginal'.toLowerCase() && (
        <SlackOriginal />
      )}
      {componentName.toLowerCase() ===
        'SlackOriginalWordmark'.toLowerCase() && <SlackOriginalWordmark />}
      {componentName.toLowerCase() === 'SlackPlain'.toLowerCase() && (
        <SlackPlain />
      )}
      {componentName.toLowerCase() === 'SlackPlainWordmark'.toLowerCase() && (
        <SlackPlainWordmark />
      )}
      {componentName.toLowerCase() === 'SocketioOriginal'.toLowerCase() && (
        <SocketioOriginal />
      )}
      {componentName.toLowerCase() ===
        'SocketioOriginalWordmark'.toLowerCase() && (
        <SocketioOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'SourcetreeOriginal'.toLowerCase() && (
        <SourcetreeOriginal />
      )}
      {componentName.toLowerCase() ===
        'SourcetreeOriginalWordmark'.toLowerCase() && (
        <SourcetreeOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'SpringOriginal'.toLowerCase() && (
        <SpringOriginal />
      )}
      {componentName.toLowerCase() ===
        'SpringOriginalWordmark'.toLowerCase() && <SpringOriginalWordmark />}
      {componentName.toLowerCase() === 'SpringPlain'.toLowerCase() && (
        <SpringPlain />
      )}
      {componentName.toLowerCase() === 'SpringPlainWordmark'.toLowerCase() && (
        <SpringPlainWordmark />
      )}
      {componentName.toLowerCase() === 'SpssOriginal'.toLowerCase() && (
        <SpssOriginal />
      )}
      {componentName.toLowerCase() === 'SpssPlain'.toLowerCase() && (
        <SpssPlain />
      )}
      {componentName.toLowerCase() === 'SqlalchemyOriginal'.toLowerCase() && (
        <SqlalchemyOriginal />
      )}
      {componentName.toLowerCase() ===
        'SqlalchemyOriginalWordmark'.toLowerCase() && (
        <SqlalchemyOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'SqlalchemyPlain'.toLowerCase() && (
        <SqlalchemyPlain />
      )}
      {componentName.toLowerCase() === 'SshOriginal'.toLowerCase() && (
        <SshOriginal />
      )}
      {componentName.toLowerCase() === 'SshOriginalWordmark'.toLowerCase() && (
        <SshOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'StorybookOriginal'.toLowerCase() && (
        <StorybookOriginal />
      )}
      {componentName.toLowerCase() ===
        'StorybookOriginalWordmark'.toLowerCase() && (
        <StorybookOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'StorybookPlain'.toLowerCase() && (
        <StorybookPlain />
      )}
      {componentName.toLowerCase() ===
        'StorybookPlainWordmark'.toLowerCase() && <StorybookPlainWordmark />}
      {componentName.toLowerCase() === 'StylusOriginal'.toLowerCase() && (
        <StylusOriginal />
      )}
      {componentName.toLowerCase() === 'SubversionOriginal'.toLowerCase() && (
        <SubversionOriginal />
      )}
      {componentName.toLowerCase() ===
        'SubversionOriginalWordmark'.toLowerCase() && (
        <SubversionOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'SvelteOriginal'.toLowerCase() && (
        <SvelteOriginal />
      )}
      {componentName.toLowerCase() ===
        'SvelteOriginalWordmark'.toLowerCase() && <SvelteOriginalWordmark />}
      {componentName.toLowerCase() === 'SveltePlain'.toLowerCase() && (
        <SveltePlain />
      )}
      {componentName.toLowerCase() === 'SveltePlainWordmark'.toLowerCase() && (
        <SveltePlainWordmark />
      )}
      {componentName.toLowerCase() === 'SwiftOriginal'.toLowerCase() && (
        <SwiftOriginal />
      )}
      {componentName.toLowerCase() ===
        'SwiftOriginalWordmark'.toLowerCase() && <SwiftOriginalWordmark />}
      {componentName.toLowerCase() === 'SwiftPlain'.toLowerCase() && (
        <SwiftPlain />
      )}
      {componentName.toLowerCase() === 'SwiftPlainWordmark'.toLowerCase() && (
        <SwiftPlainWordmark />
      )}
      {componentName.toLowerCase() === 'SymfonyOriginal'.toLowerCase() && (
        <SymfonyOriginal />
      )}
      {componentName.toLowerCase() ===
        'SymfonyOriginalWordmark'.toLowerCase() && <SymfonyOriginalWordmark />}
      {componentName.toLowerCase() ===
        'TailwindcssOriginalWordmark'.toLowerCase() && (
        <TailwindcssOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'TailwindcssPlain'.toLowerCase() && (
        <TailwindcssPlain />
      )}
      {componentName.toLowerCase() === 'TensorflowLine'.toLowerCase() && (
        <TensorflowLine />
      )}
      {componentName.toLowerCase() ===
        'TensorflowLineWordmark'.toLowerCase() && <TensorflowLineWordmark />}
      {componentName.toLowerCase() === 'TensorflowOriginal'.toLowerCase() && (
        <TensorflowOriginal />
      )}
      {componentName.toLowerCase() ===
        'TensorflowOriginalWordmark'.toLowerCase() && (
        <TensorflowOriginalWordmark />
      )}
      {componentName.toLowerCase() ===
        'ThealgorithmsOriginal'.toLowerCase() && <ThealgorithmsOriginal />}
      {componentName.toLowerCase() ===
        'ThealgorithmsOriginalWordmark'.toLowerCase() && (
        <ThealgorithmsOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'ThealgorithmsPlain'.toLowerCase() && (
        <ThealgorithmsPlain />
      )}
      {componentName.toLowerCase() ===
        'ThealgorithmsPlainWordmark'.toLowerCase() && (
        <ThealgorithmsPlainWordmark />
      )}
      {componentName.toLowerCase() === 'ThreejsOriginal'.toLowerCase() && (
        <ThreejsOriginal />
      )}
      {componentName.toLowerCase() ===
        'ThreejsOriginalWordmark'.toLowerCase() && <ThreejsOriginalWordmark />}
      {componentName.toLowerCase() === 'TomcatLine'.toLowerCase() && (
        <TomcatLine />
      )}
      {componentName.toLowerCase() === 'TomcatLineWordmark'.toLowerCase() && (
        <TomcatLineWordmark />
      )}
      {componentName.toLowerCase() === 'TomcatOriginal'.toLowerCase() && (
        <TomcatOriginal />
      )}
      {componentName.toLowerCase() ===
        'TomcatOriginalWordmark'.toLowerCase() && <TomcatOriginalWordmark />}
      {componentName.toLowerCase() === 'TortoisegitLine'.toLowerCase() && (
        <TortoisegitLine />
      )}
      {componentName.toLowerCase() === 'TortoisegitOriginal'.toLowerCase() && (
        <TortoisegitOriginal />
      )}
      {componentName.toLowerCase() === 'TortoisegitPlain'.toLowerCase() && (
        <TortoisegitPlain />
      )}
      {componentName.toLowerCase() === 'TowergitOriginal'.toLowerCase() && (
        <TowergitOriginal />
      )}
      {componentName.toLowerCase() ===
        'TowergitOriginalWordmark'.toLowerCase() && (
        <TowergitOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'TowergitPlain'.toLowerCase() && (
        <TowergitPlain />
      )}
      {componentName.toLowerCase() ===
        'TowergitPlainWordmark'.toLowerCase() && <TowergitPlainWordmark />}
      {componentName.toLowerCase() === 'TravisPlain'.toLowerCase() && (
        <TravisPlain />
      )}
      {componentName.toLowerCase() === 'TravisPlainWordmark'.toLowerCase() && (
        <TravisPlainWordmark />
      )}
      {componentName.toLowerCase() === 'TrelloPlain'.toLowerCase() && (
        <TrelloPlain />
      )}
      {componentName.toLowerCase() === 'TrelloPlainWordmark'.toLowerCase() && (
        <TrelloPlainWordmark />
      )}
      {componentName.toLowerCase() === 'TwitterOriginal'.toLowerCase() && (
        <TwitterOriginal />
      )}
      {componentName.toLowerCase() === 'TypescriptOriginal'.toLowerCase() && (
        <TypescriptOriginal />
      )}
      {componentName.toLowerCase() === 'TypescriptPlain'.toLowerCase() && (
        <TypescriptPlain />
      )}
      {componentName.toLowerCase() === 'Typo3Original'.toLowerCase() && (
        <Typo3Original />
      )}
      {componentName.toLowerCase() ===
        'Typo3OriginalWordmark'.toLowerCase() && <Typo3OriginalWordmark />}
      {componentName.toLowerCase() === 'Typo3Plain'.toLowerCase() && (
        <Typo3Plain />
      )}
      {componentName.toLowerCase() === 'Typo3PlainWordmark'.toLowerCase() && (
        <Typo3PlainWordmark />
      )}
      {componentName.toLowerCase() === 'UbuntuPlain'.toLowerCase() && (
        <UbuntuPlain />
      )}
      {componentName.toLowerCase() === 'UbuntuPlainWordmark'.toLowerCase() && (
        <UbuntuPlainWordmark />
      )}
      {componentName.toLowerCase() === 'UnityOriginal'.toLowerCase() && (
        <UnityOriginal />
      )}
      {componentName.toLowerCase() ===
        'UnityOriginalWordmark'.toLowerCase() && <UnityOriginalWordmark />}
      {componentName.toLowerCase() === 'UnixOriginal'.toLowerCase() && (
        <UnixOriginal />
      )}
      {componentName.toLowerCase() === 'UwsgiOriginal'.toLowerCase() && (
        <UwsgiOriginal />
      )}
      {componentName.toLowerCase() === 'UwsgiPlain'.toLowerCase() && (
        <UwsgiPlain />
      )}
      {componentName.toLowerCase() === 'VagrantOriginal'.toLowerCase() && (
        <VagrantOriginal />
      )}
      {componentName.toLowerCase() ===
        'VagrantOriginalWordmark'.toLowerCase() && <VagrantOriginalWordmark />}
      {componentName.toLowerCase() === 'VagrantPlain'.toLowerCase() && (
        <VagrantPlain />
      )}
      {componentName.toLowerCase() === 'VagrantPlainWordmark'.toLowerCase() && (
        <VagrantPlainWordmark />
      )}
      {componentName.toLowerCase() === 'VimOriginal'.toLowerCase() && (
        <VimOriginal />
      )}
      {componentName.toLowerCase() === 'VimPlain'.toLowerCase() && <VimPlain />}
      {componentName.toLowerCase() === 'VisualstudioPlain'.toLowerCase() && (
        <VisualstudioPlain />
      )}
      {componentName.toLowerCase() ===
        'VisualstudioPlainWordmark'.toLowerCase() && (
        <VisualstudioPlainWordmark />
      )}
      {componentName.toLowerCase() === 'VscodeOriginal'.toLowerCase() && (
        <VscodeOriginal />
      )}
      {componentName.toLowerCase() ===
        'VscodeOriginalWordmark'.toLowerCase() && <VscodeOriginalWordmark />}
      {componentName.toLowerCase() === 'VscodePlain'.toLowerCase() && (
        <VscodePlain />
      )}
      {componentName.toLowerCase() === 'VscodePlainWordmark'.toLowerCase() && (
        <VscodePlainWordmark />
      )}
      {componentName.toLowerCase() === 'VuejsLine'.toLowerCase() && (
        <VuejsLine />
      )}
      {componentName.toLowerCase() === 'VuejsLineWordmark'.toLowerCase() && (
        <VuejsLineWordmark />
      )}
      {componentName.toLowerCase() === 'VuejsOriginal'.toLowerCase() && (
        <VuejsOriginal />
      )}
      {componentName.toLowerCase() ===
        'VuejsOriginalWordmark'.toLowerCase() && <VuejsOriginalWordmark />}
      {componentName.toLowerCase() === 'VuejsPlain'.toLowerCase() && (
        <VuejsPlain />
      )}
      {componentName.toLowerCase() === 'VuejsPlainWordmark'.toLowerCase() && (
        <VuejsPlainWordmark />
      )}
      {componentName.toLowerCase() ===
        'VuestorefrontOriginal'.toLowerCase() && <VuestorefrontOriginal />}
      {componentName.toLowerCase() === 'VuestorefrontPlain'.toLowerCase() && (
        <VuestorefrontPlain />
      )}
      {componentName.toLowerCase() === 'WeblateOriginal'.toLowerCase() && (
        <WeblateOriginal />
      )}
      {componentName.toLowerCase() ===
        'WeblateOriginalWordmark'.toLowerCase() && <WeblateOriginalWordmark />}
      {componentName.toLowerCase() === 'WeblatePlain'.toLowerCase() && (
        <WeblatePlain />
      )}
      {componentName.toLowerCase() === 'WeblatePlainWordmark'.toLowerCase() && (
        <WeblatePlainWordmark />
      )}
      {componentName.toLowerCase() === 'WebpackOriginal'.toLowerCase() && (
        <WebpackOriginal />
      )}
      {componentName.toLowerCase() ===
        'WebpackOriginalWordmark'.toLowerCase() && <WebpackOriginalWordmark />}
      {componentName.toLowerCase() === 'WebpackPlain'.toLowerCase() && (
        <WebpackPlain />
      )}
      {componentName.toLowerCase() === 'WebpackPlainWordmark'.toLowerCase() && (
        <WebpackPlainWordmark />
      )}
      {componentName.toLowerCase() === 'WebstormOriginal'.toLowerCase() && (
        <WebstormOriginal />
      )}
      {componentName.toLowerCase() ===
        'WebstormOriginalWordmark'.toLowerCase() && (
        <WebstormOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'WebstormPlain'.toLowerCase() && (
        <WebstormPlain />
      )}
      {componentName.toLowerCase() ===
        'WebstormPlainWordmark'.toLowerCase() && <WebstormPlainWordmark />}
      {componentName.toLowerCase() === 'Windows8Original'.toLowerCase() && (
        <Windows8Original />
      )}
      {componentName.toLowerCase() ===
        'Windows8OriginalWordmark'.toLowerCase() && (
        <Windows8OriginalWordmark />
      )}
      {componentName.toLowerCase() === 'WoocommerceOriginal'.toLowerCase() && (
        <WoocommerceOriginal />
      )}
      {componentName.toLowerCase() ===
        'WoocommerceOriginalWordmark'.toLowerCase() && (
        <WoocommerceOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'WoocommercePlain'.toLowerCase() && (
        <WoocommercePlain />
      )}
      {componentName.toLowerCase() ===
        'WoocommercePlainWordmark'.toLowerCase() && (
        <WoocommercePlainWordmark />
      )}
      {componentName.toLowerCase() === 'WordpressOriginal'.toLowerCase() && (
        <WordpressOriginal />
      )}
      {componentName.toLowerCase() === 'WordpressPlain'.toLowerCase() && (
        <WordpressPlain />
      )}
      {componentName.toLowerCase() ===
        'WordpressPlainWordmark'.toLowerCase() && <WordpressPlainWordmark />}
      {componentName.toLowerCase() === 'XdLine'.toLowerCase() && <XdLine />}
      {componentName.toLowerCase() === 'XdPlain'.toLowerCase() && <XdPlain />}
      {componentName.toLowerCase() === 'YarnOriginal'.toLowerCase() && (
        <YarnOriginal />
      )}
      {componentName.toLowerCase() === 'YarnOriginalWordmark'.toLowerCase() && (
        <YarnOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'YiiOriginal'.toLowerCase() && (
        <YiiOriginal />
      )}
      {componentName.toLowerCase() === 'YiiOriginalWordmark'.toLowerCase() && (
        <YiiOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'YiiPlain'.toLowerCase() && <YiiPlain />}
      {componentName.toLowerCase() === 'YiiPlainWordmark'.toLowerCase() && (
        <YiiPlainWordmark />
      )}
      {componentName.toLowerCase() === 'YunohostOriginal'.toLowerCase() && (
        <YunohostOriginal />
      )}
      {componentName.toLowerCase() === 'YunohostPlain'.toLowerCase() && (
        <YunohostPlain />
      )}
      {componentName.toLowerCase() === 'ZendPlain'.toLowerCase() && (
        <ZendPlain />
      )}
      {componentName.toLowerCase() === 'ZendPlainWordmark'.toLowerCase() && (
        <ZendPlainWordmark />
      )}
      {componentName.toLowerCase() === 'ZigOriginal'.toLowerCase() && (
        <ZigOriginal />
      )}
      {componentName.toLowerCase() === 'ZigOriginalWordmark'.toLowerCase() && (
        <ZigOriginalWordmark />
      )}
      {componentName.toLowerCase() === 'ZigPlainWordmark'.toLowerCase() && (
        <ZigPlainWordmark />
      )}
    </Fragment>
  )
}

export default ListIcons
