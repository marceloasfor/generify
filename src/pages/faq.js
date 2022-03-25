import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Table from 'react-bootstrap/Table'

const Faq = () => {
return (
	<Container>
    <Row>
        <span style={{
          textAlign: "center",
          paddingBottom: "20px"
        }}
        ><b className="main-font">GeneriFAQ</b></span>
    </Row>
    <Accordion>

      <Accordion.Item eventKey="0">
        <Accordion.Header>Como criar uma conta?</Accordion.Header>
        <Accordion.Body>
            <strong>Sua conta conosco é gratuita!</strong> Basta clicar no link de <a href="#">cadastro</a> e submeter o formulário com todos os campos obrigatórios preenchidos.
            Você receberá um email de validação da conta. Após do link de confirmação no email, sua conta estará pronta para uso!
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Como encontrar uma música?</Accordion.Header>
        <Accordion.Body>
          <strong>Os maiores artistas estão no nosso player.</strong> Para encontrar suas músicas preferidas, basta fazer o <a href="#">login</a> com sua conta de cadastro,
          clicar na barra de busca e então pesquisar por artista, música ou álbum.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Posso remover as propagandas?</Accordion.Header>
        <Accordion.Body>
          <strong>Use o Generify&trade; do seu jeito.</strong> Através do nosso plano de assinaturas, você pode criar diversas playlists, remover as propagandas e muito mais.
          Para acessar as opções de plano, acesse <a href="#">Minha Conta</a> na área logada.
          <Table>
            <thead>
              <tr>
                <th scope="col">Free</th>
                <th scope="col">Individual</th>
                <th scope="col">Familia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>R$ 0,00</td>
                <td>R$ 9,99</td>
                <td>R$ 29,99</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  </Container>
);
};

export default Faq;
