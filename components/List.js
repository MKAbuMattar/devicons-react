import { Fragment, useEffect } from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

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
} from 'devicons-react'

const List = ({ items }) => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [])

  return (
    <Fragment>
      <div className="cards">
        {items.map((item, idx) => (
          <div className="card" key={idx}>
            <div className="info">
              {item.componentName.toLowerCase() ===
                'Aarch64Plain'.toLowerCase() && <Aarch64Plain />}

              {item.componentName.toLowerCase() ===
                'AdonisjsOriginalWordmark'.toLowerCase() && (
                <AdonisjsOriginalWordmark />
              )}

              {item.componentName.toLowerCase() ===
                'AftereffectsPlain'.toLowerCase() && <AftereffectsPlain />}

              {item.componentName.toLowerCase() ===
                'AmazonwebservicesPlainWordmark'.toLowerCase() && (
                <AmazonwebservicesPlainWordmark />
              )}

              {item.componentName.toLowerCase() ===
                'AndroidPlain'.toLowerCase() && <AndroidPlain />}

              {item.componentName.toLowerCase() ===
                'AngularjsPlain'.toLowerCase() && <AngularjsPlain />}

              {item.componentName.toLowerCase() ===
                'ApachePlain'.toLowerCase() && <ApachePlain />}

              {item.componentName.toLowerCase() ===
                'ApachekafkaOriginal'.toLowerCase() && <ApachekafkaOriginal />}

              {item.componentName.toLowerCase() ===
                'AppceleratorOriginal'.toLowerCase() && (
                <AppceleratorOriginal />
              )}

              {item.componentName.toLowerCase() ===
                'AppleOriginal'.toLowerCase() && <AppleOriginal />}

              {item.componentName.toLowerCase() ===
                'AppwritePlain'.toLowerCase() && <AppwritePlain />}

              {item.componentName.toLowerCase() ===
                'ArduinoPlain'.toLowerCase() && <ArduinoPlain />}

              {item.componentName.toLowerCase() ===
                'AtomOriginal'.toLowerCase() && <AtomOriginal />}

              {item.componentName.toLowerCase() ===
                'AzurePlain'.toLowerCase() && <AzurePlain />}

              {item.componentName.toLowerCase() ===
                'BabelPlain'.toLowerCase() && <BabelPlain />}

              {item.componentName.toLowerCase() ===
                'BackbonejsPlain'.toLowerCase() && <BackbonejsPlain />}

              {item.componentName.toLowerCase() ===
                'BashPlain'.toLowerCase() && <BashPlain />}

              {item.componentName.toLowerCase() ===
                'BehancePlain'.toLowerCase() && <BehancePlain />}

              {item.componentName.toLowerCase() ===
                'BitbucketOriginal'.toLowerCase() && <BitbucketOriginal />}

              {item.componentName.toLowerCase() ===
                'BootstrapPlain'.toLowerCase() && <BootstrapPlain />}

              {item.componentName.toLowerCase() ===
                'BowerPlain'.toLowerCase() && <BowerPlain />}

              {item.componentName.toLowerCase() === 'CPlain'.toLowerCase() && (
                <CPlain />
              )}

              {item.componentName.toLowerCase() ===
                'CakephpPlain'.toLowerCase() && <CakephpPlain />}

              {item.componentName.toLowerCase() ===
                'CanvaOriginal'.toLowerCase() && <CanvaOriginal />}

              {item.componentName.toLowerCase() ===
                'CentosPlain'.toLowerCase() && <CentosPlain />}

              {item.componentName.toLowerCase() ===
                'CeylonPlain'.toLowerCase() && <CeylonPlain />}

              {item.componentName.toLowerCase() ===
                'ChromePlain'.toLowerCase() && <ChromePlain />}

              {item.componentName.toLowerCase() ===
                'CircleciPlain'.toLowerCase() && <CircleciPlain />}

              {item.componentName.toLowerCase() ===
                'ClojureLine'.toLowerCase() && <ClojureLine />}

              {item.componentName.toLowerCase() ===
                'ClojurescriptPlain'.toLowerCase() && <ClojurescriptPlain />}

              {item.componentName.toLowerCase() ===
                'CodecovPlain'.toLowerCase() && <CodecovPlain />}

              {item.componentName.toLowerCase() ===
                'CodeigniterPlain'.toLowerCase() && <CodeigniterPlain />}

              {item.componentName.toLowerCase() ===
                'CodepenPlain'.toLowerCase() && <CodepenPlain />}

              {item.componentName.toLowerCase() ===
                'CoffeescriptOriginal'.toLowerCase() && (
                <CoffeescriptOriginal />
              )}

              {item.componentName.toLowerCase() ===
                'ComposerLine'.toLowerCase() && <ComposerLine />}

              {item.componentName.toLowerCase() ===
                'ConfluenceOriginal'.toLowerCase() && <ConfluenceOriginal />}

              {item.componentName.toLowerCase() ===
                'CouchdbPlain'.toLowerCase() && <CouchdbPlain />}

              {item.componentName.toLowerCase() ===
                'CPlusPlusPlain'.toLowerCase() && <CPlusPlusPlain />}

              {item.componentName.toLowerCase() ===
                'CrystalOriginal'.toLowerCase() && <CrystalOriginal />}

              {item.componentName.toLowerCase() ===
                'CSharpPlain'.toLowerCase() && <CSharpPlain />}

              {item.componentName.toLowerCase() ===
                'CSS3Plain'.toLowerCase() && <CSS3Plain />}

              {item.componentName.toLowerCase() ===
                'CucumberPlain'.toLowerCase() && <CucumberPlain />}

              {item.componentName.toLowerCase() ===
                'D3jsPlain'.toLowerCase() && <D3jsPlain />}

              {item.componentName.toLowerCase() ===
                'DartPlain'.toLowerCase() && <DartPlain />}

              {item.componentName.toLowerCase() ===
                'DebianPlain'.toLowerCase() && <DebianPlain />}

              {item.componentName.toLowerCase() ===
                'DenojsOriginal'.toLowerCase() && <DenojsOriginal />}

              {item.componentName.toLowerCase() ===
                'DigitaloceanPlain'.toLowerCase() && <DigitaloceanPlain />}

              {item.componentName.toLowerCase() ===
                'DjangoPlain'.toLowerCase() && <DjangoPlain />}

              {item.componentName.toLowerCase() ===
                'DockerPlain'.toLowerCase() && <DockerPlain />}

              {item.componentName.toLowerCase() ===
                'DoctrinePlain'.toLowerCase() && <DoctrinePlain />}

              {item.componentName.toLowerCase() ===
                'DotNetPlain'.toLowerCase() && <DotNetPlain />}

              {item.componentName.toLowerCase() ===
                'DotnetcorePlain'.toLowerCase() && <DotnetcorePlain />}

              {item.componentName.toLowerCase() ===
                'DrupalPlain'.toLowerCase() && <DrupalPlain />}

              {item.componentName.toLowerCase() ===
                'ElectronOriginal'.toLowerCase() && <ElectronOriginal />}

              {item.componentName.toLowerCase() ===
                'EleventyPlain'.toLowerCase() && <EleventyPlain />}

              {item.componentName.toLowerCase() ===
                'ElixirPlain'.toLowerCase() && <ElixirPlain />}

              {item.componentName.toLowerCase() ===
                'ElmPlain'.toLowerCase() && <ElmPlain />}

              {item.componentName.toLowerCase() ===
                'EmbeddedcPlain'.toLowerCase() && <EmbeddedcPlain />}

              {item.componentName.toLowerCase() ===
                'EmberOriginalWordmark'.toLowerCase() && (
                <EmberOriginalWordmark />
              )}

              {item.componentName.toLowerCase() ===
                'ErlangPlain'.toLowerCase() && <ErlangPlain />}

              {item.componentName.toLowerCase() ===
                'ExpressOriginal'.toLowerCase() && <ExpressOriginal />}

              {item.componentName.toLowerCase() ===
                'FacebookPlain'.toLowerCase() && <FacebookPlain />}

              {item.componentName.toLowerCase() ===
                'FeathersjsOriginal'.toLowerCase() && <FeathersjsOriginal />}

              {item.componentName.toLowerCase() ===
                'FigmaPlain'.toLowerCase() && <FigmaPlain />}

              {item.componentName.toLowerCase() ===
                'FilezillaPlain'.toLowerCase() && <FilezillaPlain />}

              {item.componentName.toLowerCase() ===
                'FirebasePlain'.toLowerCase() && <FirebasePlain />}

              {item.componentName.toLowerCase() ===
                'FirefoxPlain'.toLowerCase() && <FirefoxPlain />}

              {item.componentName.toLowerCase() ===
                'FlaskOriginal'.toLowerCase() && <FlaskOriginal />}

              {item.componentName.toLowerCase() ===
                'FlutterPlain'.toLowerCase() && <FlutterPlain />}

              {item.componentName.toLowerCase() ===
                'FoundationPlain'.toLowerCase() && <FoundationPlain />}

              {item.componentName.toLowerCase() ===
                'FSharpPlain'.toLowerCase() && <FSharpPlain />}

              {item.componentName.toLowerCase() ===
                'GatlingPlain'.toLowerCase() && <GatlingPlain />}

              {item.componentName.toLowerCase() ===
                'GatsbyPlain'.toLowerCase() && <GatsbyPlain />}

              {item.componentName.toLowerCase() ===
                'GCCPlain'.toLowerCase() && <GCCPlain />}

              {item.componentName.toLowerCase() ===
                'GIMPPlain'.toLowerCase() && <GIMPPlain />}

              {item.componentName.toLowerCase() ===
                'GitPlain'.toLowerCase() && <GitPlain />}

              {item.componentName.toLowerCase() ===
                'GitHubOriginal'.toLowerCase() && <GitHubOriginal />}

              {item.componentName.toLowerCase() ===
                'GitLabPlain'.toLowerCase() && <GitLabPlain />}

              {item.componentName.toLowerCase() ===
                'GitterPlain'.toLowerCase() && <GitterPlain />}

              {item.componentName.toLowerCase() === 'GoPlain'.toLowerCase() && (
                <GoPlain />
              )}

              {item.componentName.toLowerCase() ===
                'GodotPlain'.toLowerCase() && <GodotPlain />}

              {item.componentName.toLowerCase() ===
                'GooglePlain'.toLowerCase() && <GooglePlain />}

              {item.componentName.toLowerCase() ===
                'GoogleCloudPlain'.toLowerCase() && <GoogleCloudPlain />}

              {item.componentName.toLowerCase() ===
                'GradlePlain'.toLowerCase() && <GradlePlain />}

              {item.componentName.toLowerCase() ===
                'GrailsPlain'.toLowerCase() && <GrailsPlain />}

              {item.componentName.toLowerCase() ===
                'GraphqlPlain'.toLowerCase() && <GraphqlPlain />}

              {item.componentName.toLowerCase() ===
                'GroovyPlain'.toLowerCase() && <GroovyPlain />}

              {item.componentName.toLowerCase() ===
                'GruntPlain'.toLowerCase() && <GruntPlain />}

              {item.componentName.toLowerCase() ===
                'GulpPlain'.toLowerCase() && <GulpPlain />}

              {item.componentName.toLowerCase() ===
                'HandlebarsOriginal'.toLowerCase() && <HandlebarsOriginal />}

              {item.componentName.toLowerCase() ===
                'HaskellPlain'.toLowerCase() && <HaskellPlain />}

              {item.componentName.toLowerCase() ===
                'HaxePlain'.toLowerCase() && <HaxePlain />}

              {item.componentName.toLowerCase() ===
                'HerokuPlain'.toLowerCase() && <HerokuPlain />}

              {item.componentName.toLowerCase() ===
                'HTML5Plain'.toLowerCase() && <HTML5Plain />}

              {item.componentName.toLowerCase() ===
                'IE10Original'.toLowerCase() && <IE10Original />}

              {item.componentName.toLowerCase() ===
                'IllustratorPlain'.toLowerCase() && <IllustratorPlain />}

              {item.componentName.toLowerCase() ===
                'InkscapePlain'.toLowerCase() && <InkscapePlain />}

              {item.componentName.toLowerCase() ===
                'IntellijPlain'.toLowerCase() && <IntellijPlain />}

              {item.componentName.toLowerCase() ===
                'IonicOriginal'.toLowerCase() && <IonicOriginal />}

              {item.componentName.toLowerCase() ===
                'JamstackOriginal'.toLowerCase() && <JamstackOriginal />}

              {item.componentName.toLowerCase() ===
                'JasminePlain'.toLowerCase() && <JasminePlain />}

              {item.componentName.toLowerCase() ===
                'JavaPlain'.toLowerCase() && <JavaPlain />}

              {item.componentName.toLowerCase() ===
                'JavascriptPlain'.toLowerCase() && <JavascriptPlain />}

              {item.componentName.toLowerCase() ===
                'JeetPlain'.toLowerCase() && <JeetPlain />}

              {item.componentName.toLowerCase() ===
                'JenkinsPlain'.toLowerCase() && <JenkinsPlain />}

              {item.componentName.toLowerCase() ===
                'JestPlain'.toLowerCase() && <JestPlain />}

              {item.componentName.toLowerCase() ===
                'JetbrainsPlain'.toLowerCase() && <JetbrainsPlain />}

              {item.componentName.toLowerCase() ===
                'JiraPlain'.toLowerCase() && <JiraPlain />}

              {item.componentName.toLowerCase() ===
                'JQueryPlain'.toLowerCase() && <JQueryPlain />}

              {item.componentName.toLowerCase() ===
                'JuliaPlain'.toLowerCase() && <JuliaPlain />}

              {item.componentName.toLowerCase() ===
                'JupyterPlain'.toLowerCase() && <JupyterPlain />}

              {item.componentName.toLowerCase() ===
                'KarmaPlain'.toLowerCase() && <KarmaPlain />}

              {item.componentName.toLowerCase() ===
                'KnockoutPlainWordmark'.toLowerCase() && (
                <KnockoutPlainWordmark />
              )}

              {item.componentName.toLowerCase() ===
                'KotlinPlain'.toLowerCase() && <KotlinPlain />}

              {item.componentName.toLowerCase() ===
                'KrakenjsPlain'.toLowerCase() && <KrakenjsPlain />}

              {item.componentName.toLowerCase() ===
                'KubernetesPlain'.toLowerCase() && <KubernetesPlain />}

              {item.componentName.toLowerCase() ===
                'LabviewPlain'.toLowerCase() && <LabviewPlain />}

              {item.componentName.toLowerCase() ===
                'LaravelPlain'.toLowerCase() && <LaravelPlain />}

              {item.componentName.toLowerCase() ===
                'LESSPlainWordmark'.toLowerCase() && <LESSPlainWordmark />}

              {item.componentName.toLowerCase() ===
                'LinkedinPlain'.toLowerCase() && <LinkedinPlain />}

              {item.componentName.toLowerCase() ===
                'LinuxPlain'.toLowerCase() && <LinuxPlain />}

              {item.componentName.toLowerCase() ===
                'LuaPlain'.toLowerCase() && <LuaPlain />}

              {item.componentName.toLowerCase() ===
                'MagentoOriginal'.toLowerCase() && <MagentoOriginal />}

              {item.componentName.toLowerCase() ===
                'MarkdownOriginal'.toLowerCase() && <MarkdownOriginal />}

              {item.componentName.toLowerCase() ===
                'MaterialUIPlain'.toLowerCase() && <MaterialUIPlain />}

              {item.componentName.toLowerCase() ===
                'MatlabPlain'.toLowerCase() && <MatlabPlain />}

              {item.componentName.toLowerCase() ===
                'MeteorPlain'.toLowerCase() && <MeteorPlain />}

              {item.componentName.toLowerCase() ===
                'MinitabPlain'.toLowerCase() && <MinitabPlain />}

              {item.componentName.toLowerCase() ===
                'MochaPlain'.toLowerCase() && <MochaPlain />}

              {item.componentName.toLowerCase() ===
                'ModxPlain'.toLowerCase() && <ModxPlain />}

              {item.componentName.toLowerCase() ===
                'MongoDBPlain'.toLowerCase() && <MongoDBPlain />}

              {item.componentName.toLowerCase() ===
                'MoodlePlain'.toLowerCase() && <MoodlePlain />}

              {item.componentName.toLowerCase() ===
                'MSDosPlain'.toLowerCase() && <MSDosPlain />}

              {item.componentName.toLowerCase() ===
                'MySQLPlain'.toLowerCase() && <MySQLPlain />}

              {item.componentName.toLowerCase() ===
                'Neo4jPlain'.toLowerCase() && <Neo4jPlain />}

              {item.componentName.toLowerCase() ===
                'NestJSPlain'.toLowerCase() && <NestJSPlain />}

              {item.componentName.toLowerCase() ===
                'NextJSOriginal'.toLowerCase() && <NextJSOriginal />}

              {item.componentName.toLowerCase() ===
                'NginxOriginal'.toLowerCase() && <NginxOriginal />}

              {item.componentName.toLowerCase() ===
                'NixosPlain'.toLowerCase() && <NixosPlain />}

              {item.componentName.toLowerCase() ===
                'NodeJSPlain'.toLowerCase() && <NodeJSPlain />}

              {item.componentName.toLowerCase() ===
                'NodewebkitPlain'.toLowerCase() && <NodewebkitPlain />}

              {item.componentName.toLowerCase() ===
                'NPMOriginalWordmark'.toLowerCase() && <NPMOriginalWordmark />}

              {item.componentName.toLowerCase() ===
                'NumpyPlain'.toLowerCase() && <NumpyPlain />}

              {item.componentName.toLowerCase() ===
                'NuxtJSPlain'.toLowerCase() && <NuxtJSPlain />}

              {item.componentName.toLowerCase() ===
                'ObjectivecPlain'.toLowerCase() && <ObjectivecPlain />}

              {item.componentName.toLowerCase() ===
                'OcamlPlain'.toLowerCase() && <OcamlPlain />}

              {item.componentName.toLowerCase() ===
                'OpenGLPlain'.toLowerCase() && <OpenGLPlain />}

              {item.componentName.toLowerCase() ===
                'OperaPlain'.toLowerCase() && <OperaPlain />}

              {item.componentName.toLowerCase() ===
                'OracleOriginal'.toLowerCase() && <OracleOriginal />}

              {item.componentName.toLowerCase() ===
                'PandasPlain'.toLowerCase() && <PandasPlain />}

              {item.componentName.toLowerCase() ===
                'PerlPlain'.toLowerCase() && <PerlPlain />}

              {item.componentName.toLowerCase() ===
                'PhalconPlain'.toLowerCase() && <PhalconPlain />}

              {item.componentName.toLowerCase() ===
                'PhotoshopPlain'.toLowerCase() && <PhotoshopPlain />}

              {item.componentName.toLowerCase() ===
                'PHPPlain'.toLowerCase() && <PHPPlain />}

              {item.componentName.toLowerCase() ===
                'PHPStormPlain'.toLowerCase() && <PHPStormPlain />}

              {item.componentName.toLowerCase() ===
                'PostgreSQLPlain'.toLowerCase() && <PostgreSQLPlain />}

              {item.componentName.toLowerCase() ===
                'PremiereProPlain'.toLowerCase() && <PremiereProPlain />}

              {item.componentName.toLowerCase() ===
                'ProcessingPlain'.toLowerCase() && <ProcessingPlain />}

              {item.componentName.toLowerCase() ===
                'ProtractorPlain'.toLowerCase() && <ProtractorPlain />}

              {item.componentName.toLowerCase() ===
                'PuttyPlain'.toLowerCase() && <PuttyPlain />}

              {item.componentName.toLowerCase() ===
                'PycharmPlain'.toLowerCase() && <PycharmPlain />}

              {item.componentName.toLowerCase() ===
                'PythonPlain'.toLowerCase() && <PythonPlain />}

              {item.componentName.toLowerCase() ===
                'QtOriginal'.toLowerCase() && <QtOriginal />}

              <h3 className="title">{item.name}</h3>
            </div>
            <pre style={{ fontSize: 'initial' }}>
              <code className="js hljs language-javascript">
                {`import { ${item.componentName} } from 'devicons-react'`}
              </code>
            </pre>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default List
