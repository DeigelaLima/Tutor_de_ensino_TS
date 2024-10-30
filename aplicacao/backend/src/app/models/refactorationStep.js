const refactorationStep = {
  //Ignored Test: pap-it-1
  refSmell1: {
    pt:
      "Passo 1: Localize a anotação @Ignore no teste testSampling. " +
      "Passo 2: Exclua a anotação para eliminar o test smell.",
    en: 
      "Step 1: Locate the @Ignore annotation in the testSampling test. " +
      "Step 2: Delete the annotation to eliminate the test smell."
  },

  //pap-it-2
  refSmell2: {
    pt: 
    "Passo 1: Localize a anotação @Ignore no teste testRandomUnsymmetricMatrix. " +
    "Passo 2: Exclua a anotação para eliminar o test smell.",
    en: 
    "Step 1: Locate the @Ignore annotation in the testRandomUnsymmetricMatrix test. " +
    "Step 2: Delete the annotation to eliminate the test smell."
  },

  //pap-it-3
  refSmell3: {
    pt: 
    "Passo 1: Localize a anotação @Ignore no teste ttestNormalDistributionUnsymmetricMatrix. " +
    "Passo 2: Exclua a anotação para eliminar o test smell.",
    en: 
    "Step 1: Locate the @Ignore annotation in the test ttestNormalDistributionUnsymmetricMatrix. " +
    "Step 2: Delete the annotation to eliminate the test smell."
  },

  //Eager Test: //pap-et-1
  refSmell4: {
    pt: 
    "Passo 1: Crie um segundo teste com o nome do método testConstructor_getCause(), do tipo void. Lembre-se de utilizar a notação @Test; " +
    "Passo 2: Mova a assertion assertNull(e.getCause()) para o novo método de teste. " +
    "Passo 3: Antes da assertion que foi movida para o novo método, inclua o objeto que está sendo instanciado e que faz parte da assertion, da seguinte forma: " +
    "\nfinal EncoderException e = new EncoderException();",
    en: 
    "Step 1: Create a second test with the method name testConstructor_getCause(), of type void. Remember to use the @Test notation; " +
    "Step 2: Move the assertion assertNull(e.getCause()) to the new test method. " +
    "Step 3: Before the assertion that has been moved to the new method, include the object that is being instantiated and that is part of the assertion, as follows: " +
    "\nfinal EncoderException e = new EncoderException();"
  },

  //pap-et-2
  refSmell5: {
    pt: 
    "Passo 1: Crie um segundo teste com o nome do método  testConstructorString_getCause(), do tipo void. Lembre-se de utilizar a notação @Test; " +
    "Passo 2: Mova a assertion assertNull(e.getCause()) para o novo método de teste. " +
    "Passo 3: Antes da assertion que foi movida para o novo método, inclua o objeto que está sendo instanciado e que faz parte da assertion, da seguinte forma: " +
    "\nfinal EncoderException e = new EncoderException(MSG);",
    en: 
    "Step 1: Create a second test with the method name testConstructorString_getCause(), of type void. Remember to use the @Test notation; " +
    "Step 2: Move the assertion assertNull(e.getCause()) to the new test method. " +
    "Step 3: Before the assertion that has been moved to the new method, include the object that is being instantiated and that is part of the assertion, as follows: " + 
    "\nfinal EncoderException e = new EncoderException(MSG);"
  },

  //pap-et-3
  refSmell6: {
    pt: 
    "Passo 1: Crie um segundo teste com o nome do método  testConstructorThrowable_getCause(), do tipo void. Lembre-se de utilizar a notação @Test; " +
    "Passo 2: Mova a assertion assertEquals(t, e.getCause()); para o novo método de teste. " +
    "Passo 3: Antes da assertion que foi movida para o novo método, inclua o objeto que está sendo instanciado e que faz parte da assertion, da seguinte forma: " +
    "\nfinal EncoderException e = new EncoderException(t);",
    en: 
    "Step 1: Create a second test with the method name testConstructorThrowable_getCause(), of type void. Remember to use the @Test notation; " +
    "Step 2: Move the assertion assertEquals(t, e.getCause()); to the new test method. " +
    "Step 3: Before the assertion that has been moved to the new method, include the object that is being instantiated and that is part of the assertion, as follows: " +
    "\nfinal EncoderException e = new EncoderException(t);"
  },

  // Duplicate Assert: // pap-da-1
  refSmell7: {
    pt: 
    "Passo 1: Crie um segundo teste com o nome do método testEncodeHexByteArrayHelloWorldLowerCaseHexExtracted(), do tipo void. Lembre-se de utilizar a notação @Test; " +
    "Passo 2: Separe a atribuição (linha 9) e a assertion que está sendo repetida (linha 10) no teste testEncodeHexByteArrayHelloWorldLowerCaseHex e mova ambas para o novo método de teste criado (Não mude os nomes das variáveis e após mover exclua essas linhas do método anterior);" +
    "Passo 3: Antes da atribuição e da assertion que estava repetida, inclua as variáveis, objetos e chamadas de métodos com seus respectivos valores que fazem parte da assertion, da seguinte forma: \n" +
    'final byte[] b = StringUtils.getBytesUtf8("Hello World"); ' +
    '\nfinal String expected = "48656c6c6f20576f726c64"; ' +
    "\nchar[] actual; ",
    en: 
    "Step 1: Create a second test with the method name testEncodeHexByteArrayHelloWorldLowerCaseHexExtracted(), of type void. Remember to use the @Test notation; " +
    "Step 2: Separate the assignment (line 9) and the assertion that is being repeated (line 10) in the test testEncodeHexByteArrayHelloWorldLowerCaseHex and move both to the new test method created (Don't change the variable names and after moving delete these lines from the previous method);" +
    "Step 3: Before the assignment and the assertion that was repeated, include the variables, objects and method calls with their respective values that are part of the assertion, as follows: \n" +
    'final byte[] b = StringUtils.getBytesUtf8("Hello World"); ' +
    '\nfinal String expected = "48656c6c6f20576f726c64"; ' +
    "\nchar[] actual; ",
  },
   
  //"\nactual = Hex.encodeHex(b, true); ",
  // pap-da-2
  refSmell8: {
    pt: 
    "Passo 1: Crie um segundo teste com o nome do método testEncodeDecodeBlanksExtracted(), do tipo void e inclua o throws Exception no método. Lembre-se de utilizar a notação @Test; " +
    "Passo 2: Separe a atribuição (linha 16) e a assertion que está sendo repetida (linha 17) no teste testEncodeDecodeBlanks e mova-as para o novo método criado (Não mude os nomes das variáveis e após mover exclua essas linhas do método anterior)." +
    "Passo 3: Antes da atribuição e da assertion que estava repetida, inclua as variáveis, objetos e chamadas de métodos com seus respectivos valores que fazem parte da assertion, da seguinte forma: " +
    '\nfinal String plain = "Mind those pesky blanks"; ' +
    '\nfinal String encoded2 = "=?UTF-8?Q?Mind_those_pesky_blanks?="; ' +
    "\nfinal QCodec qcodec = new QCodec(); " +
    "\nqcodec.setEncodeBlanks(false); " +
    "\nString s = qcodec.encode(plain); " +
    "Passo 4: Remova a variável encoded2 do primeiro método (linha 5)",
    en: 
    "Step 1: Create a second test with the method name testEncodeDecodeBlanksExtracted(), of type void and include throws Exception in the method. Remember to use the @Test notation; " +
    "Step 2: Separate the assignment (line 16) and the assertion that is being repeated (line 17) in the testEncodeDecodeBlanks test and move them to the new method created (Don't change the variable names and after moving delete these lines from the previous method)." +
    "Step 3: Before the assignment and the assertion that was repeated, include the variables, objects and method calls with their respective values that are part of the assertion, as follows: " +
    '\nfinal String plain = "Mind those pesky blanks"; ' +
    '\nfinal String encoded2 = "=?UTF-8?Q?Mind_those_pesky_blanks?="; ' +
    "\nfinal QCodec qcodec = new QCodec(); " +
    "\nqcodec.setEncodeBlanks(false); " +
    "\nString s = qcodec.encode(plain); " +
    "Step 4: Remove the encoded2 variable from the first method (line 5)",
  },
    

  // pap-da-3
  refSmell9: {
    pt: 
    "Passo 1: Crie um segundo teste com o nome do método testDecodeObjectsExtracted(), do tipo void e inclua o throws Exception no método. Lembre-se de utilizar a notação @Test; " +
    "Passo 2: Separe a atribuição (linha 10) e a assertion que está sendo repetida (linha 11) no teste testDecodeObjects e mova-as para o novo método criado (Não mude os nomes das variáveis e após mover exclua essas linhas do método anterior). " +
    "Passo 3: Antes da assertion que estava repetida, inclua as variáveis, objetos e chamadas de métodos com seus respectivos valores que fazem parte da assertion, da seguinte forma: " +
    "\nfinal QuotedPrintableCodec qpcodec = new QuotedPrintableCodec(); " +
    '\nfinal String plain = "1+1 =3D 2"; ' +
    "\nString decoded = (String) qpcodec.decode((Object) plain); " +
    "\nfinal byte[] plainBA = plain.getBytes(StandardCharsets.UTF_8); " +
    "\nfinal byte[] decodedBA = (byte[]) qpcodec.decode((Object) plainBA); ",
    en: 
    "Step 1: Create a second test with the method name testDecodeObjectsExtracted(), of type void and include throws Exception in the method. Remember to use the @Test notation; " +
    "Step 2: Separate the assignment (line 10) and the assertion that is being repeated (line 11) in the testDecodeObjects test and move them to the new method created (Don't change the variable names and after moving delete these lines from the previous method). " +
    "Step 3: Before the assertion that was repeated, include the variables, objects and method calls with their respective values that are part of the assertion, as follows: " +
    "\nfinal QuotedPrintableCodec qpcodec = new QuotedPrintableCodec(); " +
    '\nfinal String plain = "1+1 =3D 2"; ' +
    "\nString decoded = (String) qpcodec.decode((Object) plain); " +
    "\nfinal byte[] plainBA = plain.getBytes(StandardCharsets.UTF_8); " +
    "\nfinal byte[] decodedBA = (byte[]) qpcodec.decode((Object) plainBA); ",
  },


  // Assertion Roulette: pap-ar-1
  refSmell10: {
    pt: 
    "Passo 1:  Localize no teste as assertions que necessitam de mensagens explicativas. " +
    "Passo 2: Seguindo a ordem em que as assertions aparecem no teste, é necessário inserir no terceiro parâmetro de cada assertion as frases a seguir:" +
    'Assertion 1: "Codificação de ru_msg esperada." ' +
    'Assertion 2: "Codificação de ch_msg esperada." ' +
    'Assertion 3: "Decodificação de ru_msg igual à original." ' +
    'Assertion 4: "Decodificação de ch_msg igual à original."',
    en: 
    "Step 1: Locate the assertions in the test that need explanatory messages. " +
    "Step 2: Following the order in which the assertions appear in the test, you need to insert the following sentences in the third parameter of each assertion:" +
    'Assertion 1: "Expected ru_msg coding." ' +
    'Assertion 2: "Expected ch_msg coding." ' +
    'Assertion 3: "Decoding of ru_msg the same as the original." ' +
    'Assertion 4: "Decoding of ch_msg the same as the original."',
  },
    

  // pap-ar-2
  refSmell11: {
    pt: 
    "Passo 1 : Localize no teste a assertion que necessita de mensagem explicativas. " +
    "Passo 2 - Seguindo a ordem em que a assertion aparece no teste, é necessário inserir no terceiro parâmetro da assertion a frase a seguir: " +
    'Assertion 1: "As codificações devem ser iguais."',
    en: 
    "Step 1 : Locate the assertion in the test that needs an explanatory message. " +
    "Step 2 - Following the order in which the assertion appears in the test, you need to insert the following phrase in the third parameter of the assertion: " +
    'Assertion 1: "The codes must be the same."',
  },
    

  // pap-ar-3
  refSmell12: {
    pt: 
    "Passo 1: Localize no teste as assertions que necessitam de mensagens explicativas. " +
    "Passo 2: Seguindo a ordem em que as assertions aparecem no teste, é necessário inserir no terceiro parâmetro de cada assertion as frases a seguir: " +
    'Assertion 1: "Tamanho do array resultante deve ser igual ao array original." ' +
    'Assertion 2: "Bytes individuais devem corresponder após a decodificação."',
    en: 
    "Step 1: Locate the assertions in the test that need explanatory messages. " +
    "Step 2: Following the order in which the assertions appear in the test, you need to insert the following sentences in the third parameter of each assertion: " +
    'Assertion 1: "The size of the resulting array must be the same as the original array." ' +
    'Assertion 2: "Individual bytes must match after decoding."',
  },
    
};

for (const key in refactorationStep) {
  refactorationStep[key].pt = refactorationStep[key].pt.replace(/\\n/g, "\n");
  refactorationStep[key].en = refactorationStep[key].en.replace(/\\n/g, "\n");
}

module.exports = refactorationStep;
