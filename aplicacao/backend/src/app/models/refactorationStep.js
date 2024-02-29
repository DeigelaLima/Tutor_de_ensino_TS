const refactorationStep = {
    //Ignored Test: pap-it-1
    refSmell1:
      "Passo 1: Localize a anotação @Ignore no teste testSampling. " +
      "Passo 2: Exclua a anotação para eliminar o test smell.",
  
    //pap-it-2
    refSmell2:
      "Passo 1: Localize a anotação @Ignore no teste testRandomUnsymmetricMatrix. " +
      "Passo 2: Exclua a anotação para eliminar o test smell.",
  
    //pap-it-3
    refSmell3:
      "Passo 1: Localize a anotação @Ignore no teste ttestNormalDistributionUnsymmetricMatrix. " +
      "Passo 2: Exclua a anotação para eliminar o test smell.",
  
    //Eager Test: //pap-et-1
    refSmell4:
      "Passo 1: Crie um segundo teste com o nome do método testConstructor_getCause(), do tipo void. Lembre-se de utilizar a notação @Test; " +
      "Passo 2: Mova a assertion assertNull(e.getCause()) para o novo método de teste. " +
      "Passo 3: Antes da assertion que foi movida para o novo método, inclua o objeto que está sendo instanciado e que faz parte da assertion, da seguinte forma: " +
      "\nfinal EncoderException e = new EncoderException();",
  
    //pap-et-2
    refSmell5:
      "Passo 1: Crie um segundo teste com o nome do método  testConstructorString_getCause(), do tipo void. Lembre-se de utilizar a notação @Test; " +
      "Passo 2: Mova a assertion assertNull(e.getCause()) para o novo método de teste. " +
      "Passo 3: Antes da assertion que foi movida para o novo método, inclua o objeto que está sendo instanciado e que faz parte da assertion, da seguinte forma: " +
      "\nfinal EncoderException e = new EncoderException(MSG);",
  
    //pap-et-3
    refSmell6:
      "Passo 1: Crie um segundo teste com o nome do método  testConstructorThrowable_getCause(), do tipo void. Lembre-se de utilizar a notação @Test; " +
      "Passo 2: Mova a assertion assertEquals(t, e.getCause()); para o novo método de teste. " +
      "Passo 3: Antes da assertion que foi movida para o novo método, inclua o objeto que está sendo instanciado e que faz parte da assertion, da seguinte forma: " +
      "\nfinal EncoderException e = new EncoderException(t);",
  
    // Duplicate Assert: // pap-da-1
    refSmell7:
      "Passo 1: Crie um segundo teste com o nome do método testEncodeHexByteArrayHelloWorldLowerCaseHexExtracted(), do tipo void. Lembre-se de utilizar a notação @Test; " +
      "Passo 2: Separe a atribuição (linha 9) e a assertion que está sendo repetida (linha 10) no teste testEncodeHexByteArrayHelloWorldLowerCaseHex e mova ambas para o novo método de teste criado (Não mude os nomes das variáveis e após mover exclua essas linhas do método anterior);" +
      "Passo 3: Antes da atribuição e da assertion que estava repetida, inclua as variáveis, objetos e chamadas de métodos com seus respectivos valores que fazem parte da assertion, da seguinte forma: \n" +
      'final byte[] b = StringUtils.getBytesUtf8("Hello World"); ' +
      '\nfinal String expected = "48656c6c6f20576f726c64"; ' +
      "\nchar[] actual; ",
      //"\nactual = Hex.encodeHex(b, true); ",
    // pap-da-2
    refSmell8:
      "Passo 1: Crie um segundo teste com o nome do método testEncodeDecodeBlanksExtracted(), do tipo void e inclua o throws Exception no método. Lembre-se de utilizar a notação @Test; " +
      "Passo 2: Separe a atribuição (linha 16) e a assertion que está sendo repetida (linha 17) no teste testEncodeDecodeBlanks e mova-as para o novo método criado (Não mude os nomes das variáveis e após mover exclua essas linhas do método anterior)." +
      "Passo 3: Antes da atribuição e da assertion que estava repetida, inclua as variáveis, objetos e chamadas de métodos com seus respectivos valores que fazem parte da assertion, da seguinte forma: " +
      '\nfinal String plain = "Mind those pesky blanks"; ' +
      '\nfinal String encoded2 = "=?UTF-8?Q?Mind_those_pesky_blanks?="; ' +
      "\nfinal QCodec qcodec = new QCodec(); " +
      "\nqcodec.setEncodeBlanks(false); " +
      "\nString s = qcodec.encode(plain); " +
      "Passo 4: Remova a variável encoded2 do primeiro método (linha 5)",
  
    // pap-da-3
    refSmell9:
      "Passo 1: Crie um segundo teste com o nome do método testDecodeObjectsExtracted(), do tipo void e inclua o throws Exception no método. Lembre-se de utilizar a notação @Test; " +
      "Passo 2: Separe a atribuição (linha 10) e a assertion que está sendo repetida (linha 11) no teste testDecodeObjects e mova-as para o novo método criado (Não mude os nomes das variáveis e após mover exclua essas linhas do método anterior). " +
      "Passo 3: Antes da assertion que estava repetida, inclua as variáveis, objetos e chamadas de métodos com seus respectivos valores que fazem parte da assertion, da seguinte forma: " +
      "\nfinal QuotedPrintableCodec qpcodec = new QuotedPrintableCodec(); " +
      '\nfinal String plain = "1+1 =3D 2"; ' +
      "\nString decoded = (String) qpcodec.decode((Object) plain); " +
      "\nfinal byte[] plainBA = plain.getBytes(StandardCharsets.UTF_8); " +
      "\nfinal byte[] decodedBA = (byte[]) qpcodec.decode((Object) plainBA); ",
  
    // Assertion Roulette: pap-ar-1
    refSmell10:
      "Passo 1:  Localize no teste as assertions que necessitam de mensagens explicativas. " +
      "Passo 2: Seguindo a ordem em que as assertions aparecem no teste, é necessário inserir no terceiro parâmetro de cada assertion as frases a seguir:" +
      'Assertion 1: "Codificação de ru_msg esperada." ' +
      'Assertion 2: "Codificação de ch_msg esperada." ' +
      'Assertion 3: "Decodificação de ru_msg igual à original." ' +
      'Assertion 4: "Decodificação de ch_msg igual à original."',
  
    // pap-ar-2
    refSmell11:
      "Passo 1 : Localize no teste a assertion que necessita de mensagem explicativas. " +
      "Passo 2 - Seguindo a ordem em que a assertion aparece no teste, é necessário inserir no terceiro parâmetro da assertion a frase a seguir: " +
      'Assertion 1: "As codificações devem ser iguais."',
  
    // pap-ar-3
    refSmell12:
      "Passo 1: Localize no teste as assertions que necessitam de mensagens explicativas. " +
      "Passo 2: Seguindo a ordem em que as assertions aparecem no teste, é necessário inserir no terceiro parâmetro de cada assertion as frases a seguir: " +
      'Assertion 1: "Tamanho do array resultante deve ser igual ao array original." ' +
      'Assertion 2: "Bytes individuais devem corresponder após a decodificação."',
  };
  
  for (const key in refactorationStep) {
    refactorationStep[key] = refactorationStep[key].replace(/\\n/g, "\n");
  }
  
  module.exports = refactorationStep;