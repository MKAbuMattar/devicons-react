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
