//////////////////////////////////////
// Broadcast Bundle Using Online Computer
//////////////////////////////////////


const iotaLibrary = require('@iota/core');

const iota = iotaLibrary.composeAPI({
  //Lookup healthy nodes at https://iota.dance/
  //provider: 'https://nodes.devnet.thetangle.org:443'
  //provider: 'https://nodes.thetangle.org:443'
  provider: 'Paste-The-URL-Of-A-Healthy-Node-Here'
})


//const myTrytes = ["MQLTGBHWORMU9WOWXZVJZRD9STFCZRETZZHXEGZCGCWZINYCUSZCNRITOSZTC9MWEDOJTSERUAHHUPOZXBBVBVDREXDTKF9UNAELORHNPQUHGZWSFZCJHCEVFSPDJXZHEHLQNMHQKKTSM9QCNGWNMGYNEXVNLPFVCZIFRKSDDMQGMJWTEL9JVYATPQUDRC9FTLYAQLLQCSPMBCNEFGINOWUASITQHQOLQTWDJYTQEISXOFNCNZABDZD9NXMAXDI9ESMBLJRKUPPZISXFPQNOORJHXTEBOVEGMUMWXXBTATUGJWJGSZHCGXRTTSSRCSJK9XOXUYKRMFNNBNJBSNBXWGDOFMRQSEBUZHVETEQGFNHXKWXPNKFIQGXTLSHTWASBWMETRUMKHKGRKTZEOMJGCPEYM9SFFVERSIYOACCXO9WMQOZESOSIZGOANLFESYJJOISCRFQEDHDFA9LFLBRVQFBL9YNCGG9ACJEZJWSJZGZVFLRKVNCIBXZODBVNKUHPDPBXMTXZU9GKINEKOEPRUYUCPBMSZFDERDNETRGU9ZXABQQPITLQC9COKDPE9SSBTUVXCCIDEKXURXSHKLVXZPJPDRNXZKAWXMWZUGDVLCVSJCFGUMZHYFHKNNWXDWBMLYHHXNCWTXFUEXPZTZBZKIBZDTOIUNUZLKREHWIQGJLTFUQ9NTKZ9L9SSN9DBAKLWEDMVJBFLCALIHUENEBBORCCWNAMNADLMUYFUZNJCAFAIUYOYMEAKKJK9TTN9JRPNULIFUGLMTUJAGMCZSP9KASRFJATGBSECKCGHPGN9WLAIVPT9BUEZBUIFYYULCXYRIAEJVHZCQKNLGGN9JGBGTFBEIHARGFWWB9TJJQ9PH9WOCBAARZRZLL9QIDAMZF9GPMRQMHKVDIPVXMUWLDEKZIGHPLREZNDU9IKGXPEUVEPG9ASZKQIVMBYLBWUUGMJPTQCL9ICKDMXVXKBEHLZTP9OH99NZRLLIGGDJ9VWYCVJAUXOWBNONHIDFGDFYWQBZZENOXEZODV9KGYYKOJVHHGJFGTGDMWJSZYPFXQWJZRXWRPABWCHQJAOP9ZDHWKFGWDQPHKCYTZSJ9MYQORKQJECVUN9KJQNRNWTFX9KUKAATZLVAQFACAXPGOIAFYZLPTGIIGJGYM9L9WOFQBWFTEZHBOGKKPMHBOMLIFWKEOEBZNEUDJXJLUROSNWZIADVJYYTXQAEV9WBQMUJXBEOEWOOOUUBNVBJQKBJPRLLOEOTJBDNNKTSFQFDNVJBRPKRFGXB9TWNAYVSVXF9PQSPDZAECLDPLFHQIABIUSSQMNRIQKOJNGXCCOULGZJRTI9RR9HXGIOULIWTSZMVUWTZFQNVJKXITNZBCNFGBLRJBVS9USDZEKRRSXMLRSEBHYMDXMIWWKGMHELRBOJBVUXCXOJJ9QIIPRQHPHTKGLR9FDCPLUOIDXBXKF9CNLZ9QDXVF9OYLSQVQNJR9F9ULVTHVSPVKIGKXXMQZABOEKLFNFDZEFYARCFRNCVVUWUORUEAWC9AUATZ9KSGOSMIKBBELLWZOWLITH9PTANWMANDTJCYIRDOOZSPAZBSAHMCRI9XRAFBVPVBLMMOXNILIN9AMXLAKMTZBOLCFYZRJFDEBEUONJEUCZPSUIUZCCXUFJGXQTGTXU9THDWVWDPWQZQGOTGQQFQOVTNUBNAQDJHPMOZBEIFVKEKEJOLJWDZYJDSPTREYBRIJ9V9YKDYYOIRIURON9VQMJXJ9GLJIYQNBPC9AUKIKBYBMAWUWYPWIFJVXEVJBBIYHYVRKIYHXKDWUSVXUSJKFYMLDRLGJAHHJEWPMJTZNLPQCI9QG9YSVICCPKKEUDXZVSSUHQALX9ZMLYL9OLMUAUXEIE9BQA9ZSFJRCHMEK99MYIS9UYSLIORACTFPVR9RFVXGE9DBVBAXQQAJABOXBDSNXLAYFAFMQBJCJZTHUBIUTEGEGCWRRZZE9MMBQ9RHCFZOQUIIRPZAUQYI9PJUNWWTRYYWUAOBCDOHLOFDCGIVZMXSNZJ9CBDLKSX9ETJDJGVIOYFUWLDRGNBRPBMKIKSZOUYDTGZANQUB9MGJKDWWKXAWXVWFEOMEY9RNWDNAOWPZDGOUIZUFR9RZJLREQLVWDDMGOKITIQP9OTVNACYHHIVIYTCIOSRKQETCKVK9VFRAAYKJNRHMHA9CHSLREPDJBRMYLPOBJRGYPFYYNDSVBJYWEIEVCEQPRBQSEHXSFKLCBQJADSZSYJLUKBCGW999999999999999999999999999999999999999999999999999999VFQKG9D99B99999999B99999999HKSXRBQCLDBYTIFGWRRJNVBCLFNOCE9RDY9CBBG9DPWNCISYZSDOLLPVCSGDIZUVURHPDZLQKFUJABPCZ999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999","USKM9YSYRGFVQYQSWJIAF9VAMPJWAN9CWCQVZPERUYGUXDO9QAEFKZQCSGJNY9OAEWZSVNLMBKMCFA9ADYORAWVKWOTQLWNNEYDXBONAOUXJUCOJY99PZLJPIZTIWUFBQLBKYMAANZUUBMHFXRH9MACLMETLGLMBFYMPIOSUTAIZSCPOJZZVFJNSADOPEGUBTIJEFJVCMHQMPUBEISVUKTHUYDGWRLBPJCIOBOAPJCQEEFLFF999PMFMUKEIXSIJYRLFQQMJWYFNGKXWYGOKKMOZIPBVZG9JLMOMRNIXNLGUKXLLKFZEIBOBNMEQGEYB9CBDFLA9ZHGGRKDOHHQZGPUOKDMNOGZFB9QSHYHRMPDGVJXDYJPJTYMSAMVHHQVYYEDPN9SEGASHDDWJRDMXCWIMGFGOJJACOCEMBNGVPFIISM9PQBRVQY9YHKSICVN9QYFL9SCTJXSFUMHUGGKUYIFXSUIJZUEAEIGKUXKNX9UJQHTISOSPTK9SKWQEWFLBEUBHEGGWRMDYKLNEILD9TPGDUMRZJKGYXKJEFBRZDLECM9GYKSNDJGCATZBZUEQKAAEKNKGEUAKNHPMVFBEXDKWSJPVQYHEVUNHKEKYQIMGTGFVR9YHZLGGEQGEAUZFEYQAOAARA9VXBRSFNKYVMZNXDLMZM9HSU9QY9WZUVUUESVUHCBXSDAECLJ9UCDRACPWTFISSKQ9VMRYNMSDICPB9VWPMPZHVYNTTTBNASFJUGVNWNNEMXNUJWUCUVGZPTZWSYVPBVVFRXIOLUPKLHJEZNVHFGR9RZQSOPOH9BHWKCYGOXICYCMKGYHNOKAUTIYLIGKULZWYBLC9PFWXXVGNSKFTRZJYHGAEHODBT9FLWGQLFV9UJNYPUFCBA9EEYUECHDHPPRMFDFBJQPJALA9MCCEKANWTQBBTRWXEBYAPWHRNLSVVJMNPXHHXEGOLGOIJLTJ9RQRWHYW9UXVFPLTG9AMZPADHPENKZTGIXTBPALJGNQWDCHKVRTYAKOVIIOWDWOGELEPPMUEIJLPKJRXA9VRQAKCQNGHSHTAUEJRLXNRKTPFJAVBCWFJIUWPPSVZSVGYTOZPKGHODES9KOZOKPTXXRHSEDCQAIVQLTZFKYCACFJFNIW9OUBCXBLYCDRHIQHXLHO9NXFQKRMQOTYNZTNEPCOROOWQT9YTBKXLFWASSWZBBQR9OXXIOLELM9WUMAZNJIEZMQ9PBIPQIDCACXULWFLBZYZUUXBZHJVCLQMVTUUHKVCJXZOFNCZDYGOLDTCCGQALWOTJ9UWISJQTAOKLBHHIGDZCYAVBBCBHTWHIUXJZLURNIPBVBIJQFMSPZVUKVHPCGNTETIYDDLKMYJMSQWSESCNXAUXURYRGQXRTCTBW9QAXWVMYVBWI9AIXRHEVMFIPXOUKLQHUNXXQKQBUOHJLLFIURDPGHFIVXPFX9ZLQDWRVXJOJELXBWZOEUSQU9ZZMXBHJOGGAHINEX9KYIFFLFKZESAQNTAGRZOQRZSKYCRXNIHCEANVIDSAAVXFNDPANNNRWOJPNRKLJNQUIGSV9LYIYLD9RWLAAGUWBDHAMNPSAYXEPIAGGFEMILOHUMVRLHMTMVKBY9IDGMEESJIKTPROEXGGKORRVWPBLGHCWYGJVWCZTLOVLBXRCSBQXGXBTENLCB9MUURAQUBSSFHVSBYWVTAMAUGRRJBZJGSXGGXDDWBNDXEYHOKFDBYJZKVSSJSCVTDKUGJCWQRDUMCFPBWPBQSGCKEWAPHCLFSULGDANXOZQVWCMZLFNGGYASDOB9OXTGHNAPIHARWGYUF9IL9IECPLOYAGNAXLIRPPYQ9HIGFLAXYLKMSHJWLHXUY9IMCFOIUPZEXQAVYVYKUSJABJFJTZOHLNFOYQSJEZQWXPQU9L9SRUEHPBBCCMTLFUSLIEVDCXJLNJUPMYJJHMNCQUSMZVMDTRLDMXIOETOIZHSDOPWNUMABCVAUCUGFZMGSWZKJVCRITOMXRVZLLYVAIPKAHNFSTDWXHXMHHHGAZSV9FDRXERBXVLUALTVQ9QXIUACJCPQYJPMEFC9QLBFNRRNNYBPLJVVK9HGRYL9BJTXJKZTWCHC9ITVNAWCGLIK9TAOQHMRJENFNGVAAIBDETRR9GQZQIJGMRRTALSYBIEWIPWTGVGISERYXYHBIKNFEYAYKJNRHMHA9CHSLREPDJBRMYLPOBJRGYPFYYNDSVBJYWEIEVCEQPRBQSEHXSFKLCBQJADSZSYJLUKBCGWWNYBUZ999999999999999999999999999999999999999999999999VFQKG9D99A99999999B99999999HKSXRBQCLDBYTIFGWRRJNVBCLFNOCE9RDY9CBBG9DPWNCISYZSDOLLPVCSGDIZUVURHPDZLQKFUJABPCZ999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999","HDTCGDHD9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999J9Q9PHLNIZXIFUNMRYYKDBTGANXNQLWVYNAYMYWIBSSGZDBVWYSHGAWTGH9FCYWQAAHAYEMA9CXTGMILDDMBYFA999999999999999999999GEOFFLINE999999999999999999VFQKG9D99999999999B99999999HKSXRBQCLDBYTIFGWRRJNVBCLFNOCE9RDY9CBBG9DPWNCISYZSDOLLPVCSGDIZUVURHPDZLQKFUJABPCZ999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999JSOFFLINE999999999999999999999999999999999999999999999999999999999999999999999999"]
const myTrytes = Paste-Signed-Bundle-Here_____This-Line-Should-Look-Much-Like-The-Line-Above

// Create a wrapping function so we can use async/await
const main = async () => {

  try {
    // Send bundle to node.
    const response = await iota.sendTrytes(myTrytes, 3, 14);
    console.log('Completed TXs');
    response.map(tx => console.log(tx));
  } catch (e) {
    console.log(e);
  }
}

main()
