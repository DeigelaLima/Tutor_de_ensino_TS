const descriptions = {
    //desc-it-1
    de1: {
      pt:
        "O teste testSampling faz parte do código de produção que define a classe MixtureMultivariateNormalDistribution. " +
        "O código de produção estabelece uma classe para modelar uma distribuição de mistura de distribuições normais multivariadas, " +
        "enquanto o código de teste verifica o comportamento dessa classe em diferentes cenários e assegura que ela está funcionando conforme o esperado. " +
        "O teste verifica se a distribuição é capaz de gerar amostras que são aproximadamente iguais aos valores corretos, " +
        "o que é crucial para garantir a precisão da implementação da distribuição. Se os valores amostrados estiverem dentro da tolerância especificada, " +
        "o teste é considerado bem-sucedido.",
      en:
        "The test testSampling is part of the production code that defines the MixtureMultivariateNormalDistribution class. " +
        "The production code establishes a class to model a mixture distribution of multivariate normal distributions, " +
        "while the test code checks the behaviour of this class in different scenarios and ensures that it is working as expected. " +
        "The test verifies that the distribution is able to generate samples that are approximately equal to the correct values, " +
        "which is crucial to guarantee the accuracy of the distribution's implementation. If the sampled values are within the specified tolerance, " +
        "the test is considered successful.",
    },
  
    //desc-it-2
    de2: {
      pt:
        "O teste testRandomUnsymmetricMatrix faz parte do código de produção que define a classe EigenDecomposition, " +
        "usada para calcular a decomposição de autovalores de uma matriz real. Este teste automatizado executa a decomposição espectral em matrizes não simétricas " +
        "geradas aleatoriamente várias vezes para verificar a robustez e correção da implementação em diversos cenários. " +
        "O código de teste verifica se essa implementação está funcionando corretamente e produzindo resultados precisos em diferentes situações, " +
        "assegurando a qualidade e confiabilidade da implementação.",
      en:
        "The testRandomUnsymmetricMatrix test is part of the production code that defines the EigenDecomposition class, " +
        "used to calculate the eigenvalue decomposition of a real matrix. This automated test runs the spectral decomposition on randomly generated non-symmetric " +
        "matrices several times to check the robustness and correctness of the implementation in various scenarios. " +
        "The test code verifies that this implementation is working correctly and producing accurate results in different situations, " +
        "ensuring the quality and reliability of the implementation.",
    },
  
    //desc-it-3
    de3: {
      pt:
        "O teste testNormalDistributionUnsymmetricMatrix faz parte do código de produção que define a classe EigenDecomposition, " +
        "utilizada para calcular a decomposição de autovalores de uma matriz real. Este código de teste, denominado testNormalDistributionUnsymmetricMatrix, " +
        "tem o objetivo de testar a decomposição espectral em matrizes não simétricas geradas a partir de amostras de uma distribuição normal de números aleatórios. " +
        "O código de teste verifica se essa implementação está funcionando corretamente e produzindo resultados precisos em uma variedade de cenários, " +
        "garantindo a qualidade e a confiabilidade da implementação.",
      en:
        "The testNormalDistributionUnsymmetricMatrix test is part of the production code that defines the EigenDecomposition class, " +
        "used to calculate the eigenvalue decomposition of a real matrix. This test code, called testNormalDistributionUnsymmetricMatrix, " +
        "aims to test the spectral decomposition in non-symmetric matrices generated from samples of a normal distribution of random numbers. " +
        "The test code verifies that this implementation is working correctly and producing accurate results in a variety of scenarios, " +
        "guaranteeing the quality and reliability of the implementation.",
    },
  
    // desc-et-1
    de4: {
      pt:
        "O teste testConstructor0 faz parte do código de produção que define a classe EncoderException, " +
        "uma exceção para representar erros de codificação. Esse teste avalia o comportamento do construtor padrão da EncoderException, " +
        "assegurando que a instância gerada não contenha mensagem de detalhes (null) e não possua causa (null), conforme a expectativa. " +
        "A validação do construtor é crucial para garantir a integridade e confiabilidade da biblioteca Apache Commons Codec.",
      en:
        "The testConstructor0 test is part of the production code that defines the EncoderException class, " +
        "an exception to represent coding errors. This test evaluates the behaviour of the EncoderException's default constructor, " +
        "ensuring that the generated instance contains no detail message (null) and no cause (null), as expected. " +
        "Validating the constructor is crucial to guaranteeing the integrity and reliability of the Apache Commons Codec library.",
    },
  
    // desc-et-2
    de5: {
      pt:
        "O teste testConstructorString faz parte do código de produção que define a classe EncoderException, " +
        "uma exceção para representar erros específicos relacionados à codificação. Este método avalia o comportamento do construtor da EncoderException, " +
        "que recebe uma mensagem de detalhes como argumento. O teste verifica se esse construtor cria uma instância com a mensagem correta e sem causa (que é null), " +
        "de acordo com o comportamento esperado. O sucesso do teste é determinado pela aprovação das verificações assertEquals e assertNull. " +
        "Esses testes são essenciais para garantir a integridade e confiabilidade dos construtores da biblioteca Apache Commons Codec.",
      en:
        "The testConstructorString test is part of the production code that defines the EncoderException class, " +
        "an exception to represent specific errors related to coding. This method evaluates the behaviour of the EncoderException constructor, " +
        "which receives a details message as an argument. The test verifies that this constructor creates an instance with the correct message and no cause (which is null), " +
        "according to the expected behaviour. The success of the test is determined by passing the assertEquals and assertNull checks. " +
        "These tests are essential to guarantee the integrity and reliability of the constructors in the Apache Commons Codec library.",
    },
  
    // desc-et-3-errada
    de6: {
      pt:
        "O método testConstructorThrowable testa se o construtor da classe EncoderException, que recebe uma causa (outra exceção) como argumento, " +
        "cria uma instância com a mensagem de detalhes configurada como o nome da classe da causa e com a causa corretamente definida. " +
        "Se ambas as verificações assertEquals passarem, o teste é bem-sucedido",
      en:
        "The testConstructorThrowable method tests whether the constructor of the EncoderException class, which receives a cause (another exception) as an argument, " +
        "creates an instance with the detail message set to the cause's class name and with the cause correctly defined. " +
        "If both assertEquals checks pass, the test is successful.",
    },
  
    // desc-da-1
    de7: {
      pt:
        "O teste testEncodeHexByteArrayHelloWorldLowerCaseHex faz parte do código de produção Hex, " +
        "abordando a funcionalidade real de codificação e decodificação em formato hexadecimal. " +
        "O código de teste verifica a implementação correta dessa funcionalidade em diversas situações, " +
        "garantindo a robustez e confiabilidade da classe Hex em diferentes contextos de uso. " +
        "O foco do teste está na codificação de uma sequência de bytes em representação hexadecimal, " +
        "especialmente na variação entre letras maiúsculas e minúsculas na saída. " +
        "O teste assegura que a classe Hex codifique arrays de bytes em representações hexadecimais, " +
        "respeitando as opções de codificação em letras maiúsculas e minúsculas.",
      en:
        "The test testEncodeHexByteArrayHelloWorldLowerCaseHex is part of the Hex production code, " +
        "addressing the actual encoding and decoding functionality in hexadecimal format. " +
        "The test code verifies the correct implementation of this functionality in various situations, " +
        "guaranteeing the robustness and reliability of the Hex class in different contexts of use. " +
        "The focus of the test is on encoding a sequence of bytes in hexadecimal representation, " +
        "especially the variation between uppercase and lowercase letters in the output. " +
        "The test ensures that the Hex class encodes byte arrays in hexadecimal representations, " +
        "respecting the options for upper and lower case encoding.",
    },
  
    // desc-da-2
    de8: {
      pt:
        "O teste testEncodeDecodeBlanks faz parte do código de produção da biblioteca Apache Commons Codec, " +
        "implementando a classe QCodec responsável pela codificação e decodificação de strings no formato quoted-printable, " +
        "conforme a norma RFC 1522. Este formato é amplamente utilizado para representar dados binários de maneira segura em e-mails, " +
        "permitindo apenas caracteres imprimíveis. O teste verifica se a classe QCodec manipula corretamente espaços em branco, " +
        "mantendo-os intactos ou substituindo-os por sublinhados, conforme especificado pela RFC 1522. " +
        "Essa verificação garante o comportamento preciso da classe ao lidar com espaços em branco durante a codificação e decodificação de strings.",
      en:
        "The testEncodeDecodeBlanks test is part of the production code for the Apache Commons Codec library, " +
        "implementing the QCodec class responsible for encoding and decoding strings in the quoted-printable format, " +
        "in accordance with the RFC 1522 standard. This format is widely used to represent binary data securely in emails, " +
        "allowing only printable characters. The test verifies that the QCodec class correctly handles whitespace, " +
        "keeping it intact or replacing it with underscores, as specified by RFC 1522. " +
        "This check ensures that the class behaves accurately when dealing with whitespace during string encoding and decoding.",
    },
  
    // desc-da-3
    de9: {
      pt:
        "O teste testDecodeObjects pertence ao código de produção da classe QuotedPrintableCodec no pacote org.apache.commons.codec.net, " +
        "parte integrante da biblioteca Apache Commons Codec. Utilizada para codificar e decodificar dados no formato Quoted-Printable, " +
        "a classe é capaz de decodificar objetos representando dados nesse formato. O teste confirma se a classe consegue decodificar corretamente strings " +
        "e arrays de bytes nesse formato, assegurando que exceções sejam lançadas ao tentar decodificar objetos fora do formato correto. " +
        "Isso garante o funcionamento adequado da classe em diversas situações.",
      en:
        "The testDecodeObjects test belongs to the production code of the QuotedPrintableCodec class in the org.apache.commons.codec.net package, " +
        "an integral part of the Apache Commons Codec library. Used to encode and decode data in the Quoted-Printable format, " +
        "the class is capable of decoding objects representing data in this format. The test confirms that the class can correctly decode strings " +
        "and byte arrays in this format, ensuring that exceptions are thrown when trying to decode objects outside the correct format. " +
        "This ensures that the class works properly in a variety of situations.",
    },
  
    //desc-ar-1
    de10: {
      pt:
        "O teste testUTF8RoundTrip faz parte do código de produção BCodec da biblioteca Apache Commons Codec, " +
        "usado para codificar e decodificar dados em Base64 conforme o RFC 1521. " +
        "Esse teste assegura que o BCodec manipula corretamente caracteres especiais em UTF-8, " +
        "garantindo sua robustez em aplicações reais. A funcionalidade de ida e volta do BCodec é verificada " +
        "para garantir consistência entre mensagens codificadas e decodificadas. " +
        "Essa validação é crucial para cenários do mundo real que envolvem a codificação de texto com caracteres não-ASCII.",
      en:
        "The testUTF8RoundTrip test is part of the BCodec production code of the Apache Commons Codec library, " +
        "used to encode and decode Base64 data in accordance with RFC 1521. " +
        "This test ensures that BCodec correctly handles special characters in UTF-8, " +
        "guaranteeing its robustness in real applications. BCodec's round-trip functionality is checked " +
        "to ensure consistency between encoded and decoded messages. " +
        "This validation is crucial for real-world scenarios that involve encoding text with non-ASCII characters.",
    },
  
    //decs-ar-2
    de11: {
      pt:
        "O teste testDefaultEncoding faz parte do código de produção da classe URLCodec, " +
        "responsável pela codificação e decodificação de URLs. O código de teste verifica a precisão dessa funcionalidade, " +
        "abrangendo casos diversos e excepcionais. Especificamente, o teste avalia a correta codificação de URLs " +
        "com um conjunto personalizado de caracteres ('UnicodeBig') e verifica a consistência com a codificação padrão. " +
        "O método validateState é utilizado para garantir a manutenção adequada do estado interno da classe após os testes, " +
        "assegurando o correto funcionamento em diferentes situações.",
      en:
        "The testDefaultEncoding test is part of the production code for the URLCodec class, " +
        "which is responsible for encoding and decoding URLs. The test code verifies the accuracy of this functionality, " +
        "covering diverse and exceptional cases. Specifically, the test evaluates the correct encoding of URLs " +
        "with a customised character set (‘UnicodeBig’) and verifies consistency with the standard encoding. " +
        "The validateState method is used to ensure that the internal state of the class is properly maintained after testing, " +
        "ensuring correct operation in different situations.",
    },
  
    //decs-ar-3
    de12: {
      pt:
        "O teste testDecodeInvalidContent integra o código de produção da classe URLCodec, " +
        "sendo responsável por verificar a capacidade dessa classe em decodificar corretamente conteúdos codificados em ISO-8859-1. " +
        "O objetivo é preservar tanto o tamanho quanto os bytes originais do conteúdo, " +
        "assegurando que a classe possa manipular distintos conjuntos de caracteres e codificações de maneira apropriada. " +
        "O método validateState é empregado para garantir a adequada manutenção do estado interno da classe após a execução dos testes, " +
        "assegurando o correto funcionamento em diferentes cenários.",
      en:
        "The testDecodeInvalidContent test integrates the production code of the URLCodec class " +
        "and is responsible for verifying the ability of this class to correctly decode content encoded in ISO-8859-1. " +
        "The aim is to preserve both the size and the original bytes of the content, " +
        "ensuring that the class can handle different character sets and encodings appropriately. " +
        "The validateState method is used to ensure that the internal state of the class is properly maintained after the tests have been run, " +
        "guaranteeing correct operation in different scenarios.",
    },
  };
  
  module.exports = descriptions;
  