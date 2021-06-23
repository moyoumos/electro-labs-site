  // from https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/

  function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }      

document.getElementById('show_img_btn').onclick = function changeContent() {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var maxWidth = 400;
      var lineHeight = 27;
      var x = canvas.width-50;//(canvas.width - maxWidth) / 2;//350;//	  {withPrefix('fillcnv.js')}
      var y = 50;
      var text ='هذا ما نحن عليه، مخاطبين من له عقل وعلم، وهو متصف بالإنصاف، خال عن الميل إلى التعصب والاعتساف، ينظر إلى ما يقال، لا إلى من قال، وأما من شأنه لزوم مألوفه وعادته، سواء كان حقا، أو غير حق، فقلد من قال الله فيهم: {إِنَّا وَجَدْنَا آبَاءَنَا عَلَى أُمَّةٍ وَإِنَّا عَلَى آثَارِهِمْ مُقْتَدُونَ} [سورة الزخرف آية: 23]، عادته وجبلته أن يعرف الحق بالرجال لا الرجال بالحق، فلا نخاطبه وأمثاله إلا بالسيف، حتى يستقيم أوده، ويصح معوجه. وجنود التوحيد - بحمد الله - منصورة وراياتهم بالسعد والإقبال منشورة، {وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنْقَلَبٍ يَنْقَلِبُونَ} [سورة الشعراء آية: 227] ، و: {فَإِنَّ حِزْبَ اللَّهِ هُمُ الْغَالِبُونَ} [سورة المائدة آية: 56]. وقال تعالى: {وَإِنَّ جُنْدَنَا لَهُمُ الْغَالِبُونَ} [سورة الصافات آية: 173] ، و {وَكَانَ حَقّاً عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ} [سورة الروم آية: 47]، و {وَالْعَاقِبَةُ لِلْمُتَّقِينَ} [سورة الأعراف آية: 128] .) الدرر السنية 1/ 234-236.';
      context.font = '21pt Scheherazade';
      context.fillStyle = '#111';
      wrapText(context, text, x, y, maxWidth, lineHeight);  
 };
