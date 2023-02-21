import { Container, Links, Content } from "./styles.js";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

export function Details(){
  
  return(
      <Container>      
        <Header />
        <main>
          <Content>
           <ButtonText title="Delete Note"/>

           <h1>
            Introduction to React
           </h1>

           <p>
           React is a declarative, efficient and flexible JavaScript library 
            flexible JavaScript library for creating user interfaces. It allows you to 
            to compose complex UIs from small, isolated pieces of 
            code called "components". 
              React has a few different types of components.
           </p>


          <Section title="Helpful Links ">
              <Links>
                <li><a href="#">https://github.com/ludiemert</a></li>
                <li><a href="#">https://www.linkedin.com/in/lucianadiemert/</a></li>          
              </Links>
          </Section>

          <Section title="Markers">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Return"/>
        </Content>
      </main>
    </Container>  
  )
}