import { Fragment } from 'react'

import {
  Aarch64Plain,
  AdonisjsOriginalWordmark,
  AftereffectsPlain,
  AmazonwebservicesPlainWordmark,
  AndroidPlain,
  AngularjsPlain,
  ApachePlain,
  ApachekafkaOriginal,
  AppceleratorOriginal,
  AppleOriginal,
  AppwritePlain,
  ArduinoPlain,
  AtomOriginal,
  AzurePlain,
  BabelPlain,
  BackbonejsPlain,
  BashPlain,
  BehancePlain,
  BitbucketOriginal,
  BootstrapPlain,
  BowerPlain,
  BulmaPlain,
  CPlain,
  CakephpPlain,
  CanvaOriginal,
  CentosPlain,
  CeylonPlain,
  ChromePlain,
  CircleciPlain,
  ClojureLine,
  ClojurescriptPlain,
  CodecovPlain,
  CodeigniterPlain,
  CodepenPlain,
  CoffeescriptOriginal,
  ComposerLine,
  ConfluenceOriginal,
  CouchdbPlain,
  CPlusPlusPlain,
  CrystalOriginal,
  CSharpPlain,
  CSS3Plain,
  CucumberPlain,
  D3jsPlain,
  DartPlain,
  DebianPlain,
  DenojsOriginal,
  DigitaloceanPlain,
  DjangoPlain,
  DockerPlain,
  DoctrinePlain,
  DotNetPlain,
  DotnetcorePlain,
  DrupalPlain,
  ElectronOriginal,
  EleventyPlain,
  ElixirPlain,
  ElmPlain,
  EmbeddedcPlain,
  EmberOriginalWordmark,
  ErlangPlain,
  ExpressOriginal,
  FacebookPlain,
  FeathersjsOriginal,
  FigmaPlain,
  FilezillaPlain,
  FirebasePlain,
  FirefoxPlain,
  FlaskOriginal,
  FlutterPlain,
  FoundationPlain,
  FSharpPlain,
  GatlingPlain,
  GatsbyPlain,
  GCCPlain,
  GIMPPlain,
  GitPlain,
  GitHubOriginal,
  GitLabPlain,
  GitterPlain,
  GoPlain,
  GodotPlain,
  GooglePlain,
  GoogleCloudPlain,
  GradlePlain,
  GrailsPlain,
  GraphqlPlain,
  GroovyPlain,
  GruntPlain,
  GulpPlain,
  HandlebarsOriginal,
  HaskellPlain,
  HaxePlain,
  HerokuPlain,
  HTML5Plain,
  IE10Original,
  IllustratorPlain,
  InkscapePlain,
  IntellijPlain,
  IonicOriginal,
  JamstackOriginal,
  JasminePlain,
  JavaPlain,
  JavascriptPlain,
  JeetPlain,
  JenkinsPlain,
  JestPlain,
  JetbrainsPlain,
  JiraPlain,
  JQueryPlain,
  JuliaPlain,
  JupyterPlain,
  KarmaPlain,
  KnockoutPlainWordmark,
  KotlinPlain,
  KrakenjsPlain,
  KubernetesPlain,
  LabviewPlain,
  LaravelPlain,
  LESSPlainWordmark,
  LinkedinPlain,
  LinuxPlain,
  LuaPlain,
  MagentoOriginal,
  MarkdownOriginal,
  MaterialUIPlain,
  MatlabPlain,
  MeteorPlain,
  MinitabPlain,
  MochaPlain,
  ModxPlain,
  MongoDBPlain,
  MoodlePlain,
  MSDosPlain,
  MySQLPlain,
  Neo4jPlain,
  NestJSPlain,
  NextJSOriginal,
  NginxOriginal,
  NixosPlain,
  NodeJSPlain,
  NodewebkitPlain,
  NPMOriginalWordmark,
  NumpyPlain,
  NuxtJSPlain,
  ObjectivecPlain,
  OcamlPlain,
  OpenGLPlain,
  OperaPlain,
  OracleOriginal,
  PandasPlain,
  PerlPlain,
  PhalconPlain,
  PhoenixPlain,
  PhotoshopPlain,
  PHPPlain,
  PHPStormPlain,
  PostgreSQLPlain,
  PremiereProPlain,
  ProcessingPlain,
  ProtractorPlain,
  PuttyPlain,
  PycharmPlain,
  PythonPlain,
  QtOriginal,
  DeviconsReactOriginal,
  MicrosoftsqlserverPlain,
  RPlain,
  RailsPlain,
  RaspberrypiLine,
  ReactOriginal,
  RedhatPlain,
  RedisPlain,
  ReduxOriginal,
  RocksDBPlain,
  RstudioPlain,
  RubyPlain,
  RubyMinePlain,
  RustPlain,
  SafariPlain,
  SalesforcePlain,
  SASSOriginal,
  ScalaPlain,
  SequelizePlain,
  ShopwareOriginal,
  SketchLine,
  SlackPlain,
  SocketioOriginal,
  SourcetreeOriginal,
  SpringPlain,
  SpssPlain,
  SQLAlchemyPlain,
  SSHOriginal,
  StorybookPlain,
  StylusOriginal,
  SubversionOriginal,
  SveltePlain,
  SwiftPlain,
  SymfonyOriginal,
  TailwindCSSPlain,
  TensorflowPlain,
  ThealgorithmsPlain,
  ThreeJSOriginal,
  TomcatLine,
  TortoisegitPlain,
  TowergitPlain,
  TravisPlain,
  TrelloPlain,
  TwitterOriginal,
  TypeScriptPlain,
  Typo3Plain,
  UbuntuPlain,
  UnityOriginal,
  UnixOriginal,
  UwsgiPlain,
  VagrantPlain,
  VimPlain,
  VisualStudioPlain,
  VSCodePlain,
  VueJSPlain,
  VuestorefrontPlain,
  WeblatePlain,
  WebPackPlain,
  WebStormPlain,
  Windows8Original,
  WooCommercePlain,
  WordPressPlain,
  XDPlain,
  YarnOriginal,
  YiiPlain,
  YunohostPlain,
  ZendPlain,
  ZigOriginal,
} from 'devicons-react'

const ListIcons = ({ componentName }) => {
  return (
    <Fragment>
      {componentName.toLowerCase() === 'Aarch64Plain'.toLowerCase() && (
        <Aarch64Plain />
      )}

      {componentName.toLowerCase() ===
        'AdonisjsOriginalWordmark'.toLowerCase() && (
        <AdonisjsOriginalWordmark />
      )}

      {componentName.toLowerCase() === 'AftereffectsPlain'.toLowerCase() && (
        <AftereffectsPlain />
      )}

      {componentName.toLowerCase() ===
        'AmazonwebservicesPlainWordmark'.toLowerCase() && (
        <AmazonwebservicesPlainWordmark />
      )}

      {componentName.toLowerCase() === 'AndroidPlain'.toLowerCase() && (
        <AndroidPlain />
      )}

      {componentName.toLowerCase() === 'AngularjsPlain'.toLowerCase() && (
        <AngularjsPlain />
      )}

      {componentName.toLowerCase() === 'ApachePlain'.toLowerCase() && (
        <ApachePlain />
      )}

      {componentName.toLowerCase() === 'ApachekafkaOriginal'.toLowerCase() && (
        <ApachekafkaOriginal />
      )}

      {componentName.toLowerCase() === 'AppceleratorOriginal'.toLowerCase() && (
        <AppceleratorOriginal />
      )}

      {componentName.toLowerCase() === 'AppleOriginal'.toLowerCase() && (
        <AppleOriginal />
      )}

      {componentName.toLowerCase() === 'AppwritePlain'.toLowerCase() && (
        <AppwritePlain />
      )}

      {componentName.toLowerCase() === 'ArduinoPlain'.toLowerCase() && (
        <ArduinoPlain />
      )}

      {componentName.toLowerCase() === 'AtomOriginal'.toLowerCase() && (
        <AtomOriginal />
      )}

      {componentName.toLowerCase() === 'AzurePlain'.toLowerCase() && (
        <AzurePlain />
      )}

      {componentName.toLowerCase() === 'BabelPlain'.toLowerCase() && (
        <BabelPlain />
      )}

      {componentName.toLowerCase() === 'BackbonejsPlain'.toLowerCase() && (
        <BackbonejsPlain />
      )}

      {componentName.toLowerCase() === 'BashPlain'.toLowerCase() && (
        <BashPlain />
      )}

      {componentName.toLowerCase() === 'BehancePlain'.toLowerCase() && (
        <BehancePlain />
      )}

      {componentName.toLowerCase() === 'BitbucketOriginal'.toLowerCase() && (
        <BitbucketOriginal />
      )}

      {componentName.toLowerCase() === 'BootstrapPlain'.toLowerCase() && (
        <BootstrapPlain />
      )}

      {componentName.toLowerCase() === 'BowerPlain'.toLowerCase() && (
        <BowerPlain />
      )}

      {componentName.toLowerCase() === 'BulmaPlain'.toLowerCase() && (
        <BulmaPlain />
      )}

      {componentName.toLowerCase() === 'CPlain'.toLowerCase() && <CPlain />}

      {componentName.toLowerCase() === 'CakephpPlain'.toLowerCase() && (
        <CakephpPlain />
      )}

      {componentName.toLowerCase() === 'CanvaOriginal'.toLowerCase() && (
        <CanvaOriginal />
      )}

      {componentName.toLowerCase() === 'CentosPlain'.toLowerCase() && (
        <CentosPlain />
      )}

      {componentName.toLowerCase() === 'CeylonPlain'.toLowerCase() && (
        <CeylonPlain />
      )}

      {componentName.toLowerCase() === 'ChromePlain'.toLowerCase() && (
        <ChromePlain />
      )}

      {componentName.toLowerCase() === 'CircleciPlain'.toLowerCase() && (
        <CircleciPlain />
      )}

      {componentName.toLowerCase() === 'ClojureLine'.toLowerCase() && (
        <ClojureLine />
      )}

      {componentName.toLowerCase() === 'ClojurescriptPlain'.toLowerCase() && (
        <ClojurescriptPlain />
      )}

      {componentName.toLowerCase() === 'CodecovPlain'.toLowerCase() && (
        <CodecovPlain />
      )}

      {componentName.toLowerCase() === 'CodeigniterPlain'.toLowerCase() && (
        <CodeigniterPlain />
      )}

      {componentName.toLowerCase() === 'CodepenPlain'.toLowerCase() && (
        <CodepenPlain />
      )}

      {componentName.toLowerCase() === 'CoffeescriptOriginal'.toLowerCase() && (
        <CoffeescriptOriginal />
      )}

      {componentName.toLowerCase() === 'ComposerLine'.toLowerCase() && (
        <ComposerLine />
      )}

      {componentName.toLowerCase() === 'ConfluenceOriginal'.toLowerCase() && (
        <ConfluenceOriginal />
      )}

      {componentName.toLowerCase() === 'CouchdbPlain'.toLowerCase() && (
        <CouchdbPlain />
      )}

      {componentName.toLowerCase() === 'CPlusPlusPlain'.toLowerCase() && (
        <CPlusPlusPlain />
      )}

      {componentName.toLowerCase() === 'CrystalOriginal'.toLowerCase() && (
        <CrystalOriginal />
      )}

      {componentName.toLowerCase() === 'CSharpPlain'.toLowerCase() && (
        <CSharpPlain />
      )}

      {componentName.toLowerCase() === 'CSS3Plain'.toLowerCase() && (
        <CSS3Plain />
      )}

      {componentName.toLowerCase() === 'CucumberPlain'.toLowerCase() && (
        <CucumberPlain />
      )}

      {componentName.toLowerCase() === 'D3jsPlain'.toLowerCase() && (
        <D3jsPlain />
      )}

      {componentName.toLowerCase() === 'DartPlain'.toLowerCase() && (
        <DartPlain />
      )}

      {componentName.toLowerCase() === 'DebianPlain'.toLowerCase() && (
        <DebianPlain />
      )}

      {componentName.toLowerCase() === 'DenojsOriginal'.toLowerCase() && (
        <DenojsOriginal />
      )}

      {componentName.toLowerCase() === 'DigitaloceanPlain'.toLowerCase() && (
        <DigitaloceanPlain />
      )}

      {componentName.toLowerCase() === 'DjangoPlain'.toLowerCase() && (
        <DjangoPlain />
      )}

      {componentName.toLowerCase() === 'DockerPlain'.toLowerCase() && (
        <DockerPlain />
      )}

      {componentName.toLowerCase() === 'DoctrinePlain'.toLowerCase() && (
        <DoctrinePlain />
      )}

      {componentName.toLowerCase() === 'DotNetPlain'.toLowerCase() && (
        <DotNetPlain />
      )}

      {componentName.toLowerCase() === 'DotnetcorePlain'.toLowerCase() && (
        <DotnetcorePlain />
      )}

      {componentName.toLowerCase() === 'DrupalPlain'.toLowerCase() && (
        <DrupalPlain />
      )}

      {componentName.toLowerCase() === 'ElectronOriginal'.toLowerCase() && (
        <ElectronOriginal />
      )}

      {componentName.toLowerCase() === 'EleventyPlain'.toLowerCase() && (
        <EleventyPlain />
      )}

      {componentName.toLowerCase() === 'ElixirPlain'.toLowerCase() && (
        <ElixirPlain />
      )}

      {componentName.toLowerCase() === 'ElmPlain'.toLowerCase() && <ElmPlain />}

      {componentName.toLowerCase() === 'EmbeddedcPlain'.toLowerCase() && (
        <EmbeddedcPlain />
      )}

      {componentName.toLowerCase() ===
        'EmberOriginalWordmark'.toLowerCase() && <EmberOriginalWordmark />}

      {componentName.toLowerCase() === 'ErlangPlain'.toLowerCase() && (
        <ErlangPlain />
      )}

      {componentName.toLowerCase() === 'ExpressOriginal'.toLowerCase() && (
        <ExpressOriginal />
      )}

      {componentName.toLowerCase() === 'FacebookPlain'.toLowerCase() && (
        <FacebookPlain />
      )}

      {componentName.toLowerCase() === 'FeathersjsOriginal'.toLowerCase() && (
        <FeathersjsOriginal />
      )}

      {componentName.toLowerCase() === 'FigmaPlain'.toLowerCase() && (
        <FigmaPlain />
      )}

      {componentName.toLowerCase() === 'FilezillaPlain'.toLowerCase() && (
        <FilezillaPlain />
      )}

      {componentName.toLowerCase() === 'FirebasePlain'.toLowerCase() && (
        <FirebasePlain />
      )}

      {componentName.toLowerCase() === 'FirefoxPlain'.toLowerCase() && (
        <FirefoxPlain />
      )}

      {componentName.toLowerCase() === 'FlaskOriginal'.toLowerCase() && (
        <FlaskOriginal />
      )}

      {componentName.toLowerCase() === 'FlutterPlain'.toLowerCase() && (
        <FlutterPlain />
      )}

      {componentName.toLowerCase() === 'FoundationPlain'.toLowerCase() && (
        <FoundationPlain />
      )}

      {componentName.toLowerCase() === 'FSharpPlain'.toLowerCase() && (
        <FSharpPlain />
      )}

      {componentName.toLowerCase() === 'GatlingPlain'.toLowerCase() && (
        <GatlingPlain />
      )}

      {componentName.toLowerCase() === 'GatsbyPlain'.toLowerCase() && (
        <GatsbyPlain />
      )}

      {componentName.toLowerCase() === 'GCCPlain'.toLowerCase() && <GCCPlain />}

      {componentName.toLowerCase() === 'GIMPPlain'.toLowerCase() && (
        <GIMPPlain />
      )}

      {componentName.toLowerCase() === 'GitPlain'.toLowerCase() && <GitPlain />}

      {componentName.toLowerCase() === 'GitHubOriginal'.toLowerCase() && (
        <GitHubOriginal />
      )}

      {componentName.toLowerCase() === 'GitLabPlain'.toLowerCase() && (
        <GitLabPlain />
      )}

      {componentName.toLowerCase() === 'GitterPlain'.toLowerCase() && (
        <GitterPlain />
      )}

      {componentName.toLowerCase() === 'GoPlain'.toLowerCase() && <GoPlain />}

      {componentName.toLowerCase() === 'GodotPlain'.toLowerCase() && (
        <GodotPlain />
      )}

      {componentName.toLowerCase() === 'GooglePlain'.toLowerCase() && (
        <GooglePlain />
      )}

      {componentName.toLowerCase() === 'GoogleCloudPlain'.toLowerCase() && (
        <GoogleCloudPlain />
      )}

      {componentName.toLowerCase() === 'GradlePlain'.toLowerCase() && (
        <GradlePlain />
      )}

      {componentName.toLowerCase() === 'GrailsPlain'.toLowerCase() && (
        <GrailsPlain />
      )}

      {componentName.toLowerCase() === 'GraphqlPlain'.toLowerCase() && (
        <GraphqlPlain />
      )}

      {componentName.toLowerCase() === 'GroovyPlain'.toLowerCase() && (
        <GroovyPlain />
      )}

      {componentName.toLowerCase() === 'GruntPlain'.toLowerCase() && (
        <GruntPlain />
      )}

      {componentName.toLowerCase() === 'GulpPlain'.toLowerCase() && (
        <GulpPlain />
      )}

      {componentName.toLowerCase() === 'HandlebarsOriginal'.toLowerCase() && (
        <HandlebarsOriginal />
      )}

      {componentName.toLowerCase() === 'HaskellPlain'.toLowerCase() && (
        <HaskellPlain />
      )}

      {componentName.toLowerCase() === 'HaxePlain'.toLowerCase() && (
        <HaxePlain />
      )}

      {componentName.toLowerCase() === 'HerokuPlain'.toLowerCase() && (
        <HerokuPlain />
      )}

      {componentName.toLowerCase() === 'HTML5Plain'.toLowerCase() && (
        <HTML5Plain />
      )}

      {componentName.toLowerCase() === 'IE10Original'.toLowerCase() && (
        <IE10Original />
      )}

      {componentName.toLowerCase() === 'IllustratorPlain'.toLowerCase() && (
        <IllustratorPlain />
      )}

      {componentName.toLowerCase() === 'InkscapePlain'.toLowerCase() && (
        <InkscapePlain />
      )}

      {componentName.toLowerCase() === 'IntellijPlain'.toLowerCase() && (
        <IntellijPlain />
      )}

      {componentName.toLowerCase() === 'IonicOriginal'.toLowerCase() && (
        <IonicOriginal />
      )}

      {componentName.toLowerCase() === 'JamstackOriginal'.toLowerCase() && (
        <JamstackOriginal />
      )}

      {componentName.toLowerCase() === 'JasminePlain'.toLowerCase() && (
        <JasminePlain />
      )}

      {componentName.toLowerCase() === 'JavaPlain'.toLowerCase() && (
        <JavaPlain />
      )}

      {componentName.toLowerCase() === 'JavascriptPlain'.toLowerCase() && (
        <JavascriptPlain />
      )}

      {componentName.toLowerCase() === 'JeetPlain'.toLowerCase() && (
        <JeetPlain />
      )}

      {componentName.toLowerCase() === 'JenkinsPlain'.toLowerCase() && (
        <JenkinsPlain />
      )}

      {componentName.toLowerCase() === 'JestPlain'.toLowerCase() && (
        <JestPlain />
      )}

      {componentName.toLowerCase() === 'JetbrainsPlain'.toLowerCase() && (
        <JetbrainsPlain />
      )}

      {componentName.toLowerCase() === 'JiraPlain'.toLowerCase() && (
        <JiraPlain />
      )}

      {componentName.toLowerCase() === 'JQueryPlain'.toLowerCase() && (
        <JQueryPlain />
      )}

      {componentName.toLowerCase() === 'JuliaPlain'.toLowerCase() && (
        <JuliaPlain />
      )}

      {componentName.toLowerCase() === 'JupyterPlain'.toLowerCase() && (
        <JupyterPlain />
      )}

      {componentName.toLowerCase() === 'KarmaPlain'.toLowerCase() && (
        <KarmaPlain />
      )}

      {componentName.toLowerCase() ===
        'KnockoutPlainWordmark'.toLowerCase() && <KnockoutPlainWordmark />}

      {componentName.toLowerCase() === 'KotlinPlain'.toLowerCase() && (
        <KotlinPlain />
      )}

      {componentName.toLowerCase() === 'KrakenjsPlain'.toLowerCase() && (
        <KrakenjsPlain />
      )}

      {componentName.toLowerCase() === 'KubernetesPlain'.toLowerCase() && (
        <KubernetesPlain />
      )}

      {componentName.toLowerCase() === 'LabviewPlain'.toLowerCase() && (
        <LabviewPlain />
      )}

      {componentName.toLowerCase() === 'LaravelPlain'.toLowerCase() && (
        <LaravelPlain />
      )}

      {componentName.toLowerCase() === 'LESSPlainWordmark'.toLowerCase() && (
        <LESSPlainWordmark />
      )}

      {componentName.toLowerCase() === 'LinkedinPlain'.toLowerCase() && (
        <LinkedinPlain />
      )}

      {componentName.toLowerCase() === 'LinuxPlain'.toLowerCase() && (
        <LinuxPlain />
      )}

      {componentName.toLowerCase() === 'LuaPlain'.toLowerCase() && <LuaPlain />}

      {componentName.toLowerCase() === 'MagentoOriginal'.toLowerCase() && (
        <MagentoOriginal />
      )}

      {componentName.toLowerCase() === 'MarkdownOriginal'.toLowerCase() && (
        <MarkdownOriginal />
      )}

      {componentName.toLowerCase() === 'MaterialUIPlain'.toLowerCase() && (
        <MaterialUIPlain />
      )}

      {componentName.toLowerCase() === 'MatlabPlain'.toLowerCase() && (
        <MatlabPlain />
      )}

      {componentName.toLowerCase() === 'MeteorPlain'.toLowerCase() && (
        <MeteorPlain />
      )}

      {componentName.toLowerCase() === 'MinitabPlain'.toLowerCase() && (
        <MinitabPlain />
      )}

      {componentName.toLowerCase() === 'MochaPlain'.toLowerCase() && (
        <MochaPlain />
      )}

      {componentName.toLowerCase() === 'ModxPlain'.toLowerCase() && (
        <ModxPlain />
      )}

      {componentName.toLowerCase() === 'MongoDBPlain'.toLowerCase() && (
        <MongoDBPlain />
      )}

      {componentName.toLowerCase() === 'MoodlePlain'.toLowerCase() && (
        <MoodlePlain />
      )}

      {componentName.toLowerCase() === 'MSDosPlain'.toLowerCase() && (
        <MSDosPlain />
      )}

      {componentName.toLowerCase() === 'MySQLPlain'.toLowerCase() && (
        <MySQLPlain />
      )}

      {componentName.toLowerCase() === 'Neo4jPlain'.toLowerCase() && (
        <Neo4jPlain />
      )}

      {componentName.toLowerCase() === 'NestJSPlain'.toLowerCase() && (
        <NestJSPlain />
      )}

      {componentName.toLowerCase() === 'NextJSOriginal'.toLowerCase() && (
        <NextJSOriginal />
      )}

      {componentName.toLowerCase() === 'NginxOriginal'.toLowerCase() && (
        <NginxOriginal />
      )}

      {componentName.toLowerCase() === 'NixosPlain'.toLowerCase() && (
        <NixosPlain />
      )}

      {componentName.toLowerCase() === 'NodeJSPlain'.toLowerCase() && (
        <NodeJSPlain />
      )}

      {componentName.toLowerCase() === 'NodewebkitPlain'.toLowerCase() && (
        <NodewebkitPlain />
      )}

      {componentName.toLowerCase() === 'NPMOriginalWordmark'.toLowerCase() && (
        <NPMOriginalWordmark />
      )}

      {componentName.toLowerCase() === 'NumpyPlain'.toLowerCase() && (
        <NumpyPlain />
      )}

      {componentName.toLowerCase() === 'NuxtJSPlain'.toLowerCase() && (
        <NuxtJSPlain />
      )}

      {componentName.toLowerCase() === 'ObjectivecPlain'.toLowerCase() && (
        <ObjectivecPlain />
      )}

      {componentName.toLowerCase() === 'OcamlPlain'.toLowerCase() && (
        <OcamlPlain />
      )}

      {componentName.toLowerCase() === 'OpenGLPlain'.toLowerCase() && (
        <OpenGLPlain />
      )}

      {componentName.toLowerCase() === 'OperaPlain'.toLowerCase() && (
        <OperaPlain />
      )}

      {componentName.toLowerCase() === 'OracleOriginal'.toLowerCase() && (
        <OracleOriginal />
      )}

      {componentName.toLowerCase() === 'PandasPlain'.toLowerCase() && (
        <PandasPlain />
      )}

      {componentName.toLowerCase() === 'PerlPlain'.toLowerCase() && (
        <PerlPlain />
      )}

      {componentName.toLowerCase() === 'PhalconPlain'.toLowerCase() && (
        <PhalconPlain />
      )}

      {componentName.toLowerCase() === 'PhoenixPlain'.toLowerCase() && (
        <PhoenixPlain />
      )}

      {componentName.toLowerCase() === 'PhotoshopPlain'.toLowerCase() && (
        <PhotoshopPlain />
      )}

      {componentName.toLowerCase() === 'PHPPlain'.toLowerCase() && <PHPPlain />}

      {componentName.toLowerCase() === 'PHPStormPlain'.toLowerCase() && (
        <PHPStormPlain />
      )}

      {componentName.toLowerCase() === 'PostgreSQLPlain'.toLowerCase() && (
        <PostgreSQLPlain />
      )}

      {componentName.toLowerCase() === 'PremiereProPlain'.toLowerCase() && (
        <PremiereProPlain />
      )}

      {componentName.toLowerCase() === 'ProcessingPlain'.toLowerCase() && (
        <ProcessingPlain />
      )}

      {componentName.toLowerCase() === 'ProtractorPlain'.toLowerCase() && (
        <ProtractorPlain />
      )}

      {componentName.toLowerCase() === 'PuttyPlain'.toLowerCase() && (
        <PuttyPlain />
      )}

      {componentName.toLowerCase() === 'PycharmPlain'.toLowerCase() && (
        <PycharmPlain />
      )}

      {componentName.toLowerCase() === 'PythonPlain'.toLowerCase() && (
        <PythonPlain />
      )}

      {componentName.toLowerCase() === 'QtOriginal'.toLowerCase() && (
        <QtOriginal />
      )}

      {componentName.toLowerCase() ===
        'DeviconsReactOriginal'.toLowerCase() && <DeviconsReactOriginal />}

      {componentName.toLowerCase() ===
        'MicrosoftsqlserverPlain'.toLowerCase() && <MicrosoftsqlserverPlain />}

      {componentName.toLowerCase() === 'RPlain'.toLowerCase() && <RPlain />}

      {componentName.toLowerCase() === 'RailsPlain'.toLowerCase() && (
        <RailsPlain />
      )}

      {componentName.toLowerCase() === 'RaspberrypiLine'.toLowerCase() && (
        <RaspberrypiLine />
      )}

      {componentName.toLowerCase() === 'ReactOriginal'.toLowerCase() && (
        <ReactOriginal />
      )}

      {componentName.toLowerCase() === 'RedhatPlain'.toLowerCase() && (
        <RedhatPlain />
      )}

      {componentName.toLowerCase() === 'RedisPlain'.toLowerCase() && (
        <RedisPlain />
      )}

      {componentName.toLowerCase() === 'ReduxOriginal'.toLowerCase() && (
        <ReduxOriginal />
      )}

      {componentName.toLowerCase() === 'RocksDBPlain'.toLowerCase() && (
        <RocksDBPlain />
      )}

      {componentName.toLowerCase() === 'RstudioPlain'.toLowerCase() && (
        <RstudioPlain />
      )}

      {componentName.toLowerCase() === 'RubyPlain'.toLowerCase() && (
        <RubyPlain />
      )}

      {componentName.toLowerCase() === 'RubyMinePlain'.toLowerCase() && (
        <RubyMinePlain />
      )}

      {componentName.toLowerCase() === 'RustPlain'.toLowerCase() && (
        <RustPlain />
      )}

      {componentName.toLowerCase() === 'SafariPlain'.toLowerCase() && (
        <SafariPlain />
      )}

      {componentName.toLowerCase() === 'SalesforcePlain'.toLowerCase() && (
        <SalesforcePlain />
      )}

      {componentName.toLowerCase() === 'SASSOriginal'.toLowerCase() && (
        <SASSOriginal />
      )}

      {componentName.toLowerCase() === 'ScalaPlain'.toLowerCase() && (
        <ScalaPlain />
      )}

      {componentName.toLowerCase() === 'SequelizePlain'.toLowerCase() && (
        <SequelizePlain />
      )}

      {componentName.toLowerCase() === 'ShopwareOriginal'.toLowerCase() && (
        <ShopwareOriginal />
      )}

      {componentName.toLowerCase() === 'SketchLine'.toLowerCase() && (
        <SketchLine />
      )}

      {componentName.toLowerCase() === 'SlackPlain'.toLowerCase() && (
        <SlackPlain />
      )}

      {componentName.toLowerCase() === 'SocketioOriginal'.toLowerCase() && (
        <SocketioOriginal />
      )}

      {componentName.toLowerCase() === 'SourcetreeOriginal'.toLowerCase() && (
        <SourcetreeOriginal />
      )}

      {componentName.toLowerCase() === 'SpringPlain'.toLowerCase() && (
        <SpringPlain />
      )}

      {componentName.toLowerCase() === 'SpssPlain'.toLowerCase() && (
        <SpssPlain />
      )}

      {componentName.toLowerCase() === 'SQLAlchemyPlain'.toLowerCase() && (
        <SQLAlchemyPlain />
      )}

      {componentName.toLowerCase() === 'SSHOriginal'.toLowerCase() && (
        <SSHOriginal />
      )}

      {componentName.toLowerCase() === 'StorybookPlain'.toLowerCase() && (
        <StorybookPlain />
      )}

      {componentName.toLowerCase() === 'StylusOriginal'.toLowerCase() && (
        <StylusOriginal />
      )}

      {componentName.toLowerCase() === 'SubversionOriginal'.toLowerCase() && (
        <SubversionOriginal />
      )}

      {componentName.toLowerCase() === 'SveltePlain'.toLowerCase() && (
        <SveltePlain />
      )}

      {componentName.toLowerCase() === 'SwiftPlain'.toLowerCase() && (
        <SwiftPlain />
      )}

      {componentName.toLowerCase() === 'SymfonyOriginal'.toLowerCase() && (
        <SymfonyOriginal />
      )}

      {componentName.toLowerCase() === 'TailwindCSSPlain'.toLowerCase() && (
        <TailwindCSSPlain />
      )}

      {componentName.toLowerCase() === 'TensorflowPlain'.toLowerCase() && (
        <TensorflowPlain />
      )}

      {componentName.toLowerCase() === 'ThealgorithmsPlain'.toLowerCase() && (
        <ThealgorithmsPlain />
      )}

      {componentName.toLowerCase() === 'ThreeJSOriginal'.toLowerCase() && (
        <ThreeJSOriginal />
      )}

      {componentName.toLowerCase() === 'TomcatLine'.toLowerCase() && (
        <TomcatLine />
      )}

      {componentName.toLowerCase() === 'TortoisegitPlain'.toLowerCase() && (
        <TortoisegitPlain />
      )}

      {componentName.toLowerCase() === 'TowergitPlain'.toLowerCase() && (
        <TowergitPlain />
      )}

      {componentName.toLowerCase() === 'TravisPlain'.toLowerCase() && (
        <TravisPlain />
      )}

      {componentName.toLowerCase() === 'TrelloPlain'.toLowerCase() && (
        <TrelloPlain />
      )}

      {componentName.toLowerCase() === 'TwitterOriginal'.toLowerCase() && (
        <TwitterOriginal />
      )}

      {componentName.toLowerCase() === 'TypeScriptPlain'.toLowerCase() && (
        <TypeScriptPlain />
      )}

      {componentName.toLowerCase() === 'Typo3Plain'.toLowerCase() && (
        <Typo3Plain />
      )}

      {componentName.toLowerCase() === 'UbuntuPlain'.toLowerCase() && (
        <UbuntuPlain />
      )}

      {componentName.toLowerCase() === 'UnityOriginal'.toLowerCase() && (
        <UnityOriginal />
      )}

      {componentName.toLowerCase() === 'UnixOriginal'.toLowerCase() && (
        <UnixOriginal />
      )}

      {componentName.toLowerCase() === 'UwsgiPlain'.toLowerCase() && (
        <UwsgiPlain />
      )}

      {componentName.toLowerCase() === 'VagrantPlain'.toLowerCase() && (
        <VagrantPlain />
      )}

      {componentName.toLowerCase() === 'VimPlain'.toLowerCase() && <VimPlain />}

      {componentName.toLowerCase() === 'VisualStudioPlain'.toLowerCase() && (
        <VisualStudioPlain />
      )}

      {componentName.toLowerCase() === 'VSCodePlain'.toLowerCase() && (
        <VSCodePlain />
      )}

      {componentName.toLowerCase() === 'VueJSPlain'.toLowerCase() && (
        <VueJSPlain />
      )}

      {componentName.toLowerCase() === 'VuestorefrontPlain'.toLowerCase() && (
        <VuestorefrontPlain />
      )}

      {componentName.toLowerCase() === 'WeblatePlain'.toLowerCase() && (
        <WeblatePlain />
      )}

      {componentName.toLowerCase() === 'WebPackPlain'.toLowerCase() && (
        <WebPackPlain />
      )}

      {componentName.toLowerCase() === 'WebStormPlain'.toLowerCase() && (
        <WebStormPlain />
      )}

      {componentName.toLowerCase() === 'Windows8Original'.toLowerCase() && (
        <Windows8Original />
      )}

      {componentName.toLowerCase() === 'WooCommercePlain'.toLowerCase() && (
        <WooCommercePlain />
      )}

      {componentName.toLowerCase() === 'WordPressPlain'.toLowerCase() && (
        <WordPressPlain />
      )}

      {componentName.toLowerCase() === 'XDPlain'.toLowerCase() && <XDPlain />}

      {componentName.toLowerCase() === 'YarnOriginal'.toLowerCase() && (
        <YarnOriginal />
      )}

      {componentName.toLowerCase() === 'YiiPlain'.toLowerCase() && <YiiPlain />}

      {componentName.toLowerCase() === 'YunohostPlain'.toLowerCase() && (
        <YunohostPlain />
      )}

      {componentName.toLowerCase() === 'ZendPlain'.toLowerCase() && (
        <ZendPlain />
      )}

      {componentName.toLowerCase() === 'ZigOriginal'.toLowerCase() && (
        <ZigOriginal />
      )}
    </Fragment>
  )
}

export default ListIcons
