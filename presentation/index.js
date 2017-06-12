// Import React
import React from "react";
import PropsManipulationExample from "../examples/props-manipulation"
import StateAbstractionExample from "../examples/state-abstraction"
import InverseInheritenceExample from "../examples/inverse-inheritance"
// Import Spectacle Core tags
import {
  Appear,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Link,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  allYouGot: require("../assets/all-you-got.jpg"),
  knowReact: require("../assets/know-react.jpg"),
  moreCodeBetter: require("../assets/more-code-better.jpg"),
  youDone: require("../assets/you-done.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#4fb7f5",
  secondary: "#f5e04f"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="black">
            React
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Higher Orders Components
          </Heading>
          <Heading size={2} caps lineHeight={1} textColor="black">
            and Beyond
          </Heading>
          <Heading size={6} caps textColor="tertiary">
            Patterns to help you level up in React and write functional, composable components
          </Heading>
          <Link href="https://github.com/danfernand/hoc-presentation">
            <Text size={1} bold caps textColor="tertiary" lineHeight={3}>
                View on Github
            </Text>
          </Link>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="black">
            About me
          </Heading>
          <Text fit bold caps textColor="tertiary" lineHeight={1}>
            Senior Front-end Engineer at <Link href="http://help.com">Help.com</Link>
          </Text>
          <Text bold caps textColor="tertiary" lineHeight={2}>
            Twitter <Link href="https://twitter.com/danielHeartsJS">@danielHeartsJS</Link>
          </Text>
          <Text bold caps textColor="tertiary" lineHeight={1}>
            I like friends!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="black">
            Topics To Cover
          </Heading>
          <Text size={2} textColor="primary" lineHeight={1}>
            HOC === Higher Order Component
          </Text>
          <List>
            <Appear><ListItem>Why HOC's and why over mixins</ListItem></Appear>
            <Appear><ListItem>Ways to use an HOC</ListItem></Appear>
            <Appear><ListItem>Recompose - HOC's on steroids</ListItem></Appear>
            <Appear><ListItem>Bonus Points - Compare HOC's to Function as Children</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="black">
            A brief history lesson
          </Heading>
          <Text size={2} lineHeight={1}>
            Before React 0.13.0
          </Text>
          <br />
          <List>
            <Appear><ListItem>No es6 class support</ListItem></Appear>
            <Appear><ListItem>No other way to share functionality</ListItem></Appear>
            <Appear><ListItem>{"Mixins, Power < Pitfalls"}</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={4} caps lineHeight={1} textColor="black">
            A quick mixins example
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/mixins/main.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={4} caps lineHeight={1} textColor="black">
            Mind blown!
          </Heading>
          <Image src={images.knowReact.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary"
          notes={
            `<ul>
              <li>a component can be dependent on a method from a mixin or viseversa</li>
              <li>you cannot define a method of the same name in a mixin and a component</li>
              <li>more complexity add more coupling from the mixin to the component</li>
            </ul>`
          }
        >
          <Heading size={4} caps lineHeight={1} textColor="black">
            Not all rainbows and cupcakes...
          </Heading>
          <List>
            <Appear><ListItem>Mixins introduce implicit dependencies</ListItem></Appear>
            <Appear><ListItem>Mixins cause name clashes</ListItem></Appear>
            <Appear><ListItem>Mixins cause snowballing complexity</ListItem></Appear>
            <Appear>
              <ListItem>
                <Link href="https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html">
                  Read more about it!
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={6} caps lineHeight={1} textColor="black">
            HOC's to the rescue!
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc/main.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={4} caps lineHeight={1} textColor="black">
            Looks like more code...
          </Heading>
          <Image src={images.moreCodeBetter.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1.3} textColor="black">
            Before we go too far, let's describe what is an HOC
          </Heading>
          <Text size={8} lineHeight={1.3} textColor="black" style={ {
            backgroundColor: "rgba(0, 0, 0, .5)",
            color: "#ffffff",
            fontSize: "30px"
          } }
          >
            Function(Component) return Component
          </Text>
          <br />
          <Text size={7} caps lineHeight={1} textColor="black">
            similar to a higher order function
          </Text>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hof/main.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="black">
            Let's look at the example again
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc/main.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="black">
            Ways to use an HOC
          </Heading>
          <List>
            <Appear><ListItem>Props manipulator/enhancer</ListItem></Appear>
            <Appear><ListItem>State abstraction</ListItem></Appear>
            <Appear><ListItem>Inheritance inversion</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary"
          notes={
            `<ul>
              <li>react redux connect works like this</li>
            </ul>`
          }
        >
          <Heading size={6} fit textColor="primary" caps>
            As Props manipulator/enhancer -&nbsp;
            <Link href="https://codesandbox.io/s/nZpnxKJ9R">
              Interact in codesandbox.io
            </Link>
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc/props-manipulation.example")}
            margin="20px auto"
          />
          <PropsManipulationExample />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} fit textColor="tertiary" caps>
            as state abstraction -&nbsp;
            <Link href="https://codesandbox.io/s/BgQLmoDLo">
              Interact in codesandbox.io
            </Link>
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc/state-abstraction1.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc/state-abstraction2.example")}
            margin="-50px 20px auto auto"
          />
          <StateAbstractionExample />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={6} fit textColor="tertiary" caps>
            as Inheritance inversion -&nbsp;
            <Link href="https://codesandbox.io/s/v2M5m5rEm">
              Interact in codesandbox.io
            </Link>
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc/inverse-inheritance.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={6} fit textColor="tertiary" caps>
            as Inheritance inversion -&nbsp;
            <Link href="https://codesandbox.io/s/v2M5m5rEm">
              Interact in codesandbox.io
            </Link>
          </Heading>
          <InverseInheritenceExample />
          <List textColor="black">
            <Appear><ListItem>Doesn't work on functional components</ListItem></Appear>
            <Appear><ListItem>Cannot edit/create props of WrappedComponent</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Naming
          </Heading>
          <span>
            Wrapping a component in an HOC cause that component to loose its name. We can prevent that from happening with the following code
          </span>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc/naming.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.allYouGot.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary"
          notes={
            `<ul>
              <li>Created by Andrew Clark, co creator of redux</li>
            </ul>`
          }
        >
          <Heading size={6} caps lineHeight={1} textColor="black">
            HOC's on steroids - Recompose
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/hoc/recompose.example")}
            margin="20px auto"
          />
          <Link href="https://github.com/acdlite/recompose/blob/master/docs/API.md">
            API fully documented here!
          </Link>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Image src={images.youDone.replace("/", "")} margin="0px auto 40px" height="400px"/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading fit caps lineHeight={1} textColor="black">
            Competing Pattern - Function As Children
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/fac/main1.example")}
            margin="20px auto"
          />
          <Link href="https://codesandbox.io/s/VmG41WAwv">
            Interact in codesandbox.io
          </Link>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/fac/main2.example")}
            margin="-150px 20px auto auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading fit caps lineHeight={1} textColor="black">
            Benefits of Function As Children
          </Heading>
          <List textColor="black">
            <Appear><ListItem>Flexibility in how to implement and consume</ListItem></Appear>
            <Appear><ListItem>Prevent layer of indirection added by HOC</ListItem></Appear>
            <Appear><ListItem>Doesn’t pollute “props” namespace</ListItem></Appear>
            <Appear><ListItem>
              <Link href="https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9">
                Read more about it!
              </Link>
            </ListItem></Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
