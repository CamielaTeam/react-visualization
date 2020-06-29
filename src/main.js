var ReactLexer = require("../gramatica/.antlr/ReactLexer")
  .ReactLexer;
var ReactParser = require("../gramatica/.antlr/ReactParser")
  .ReactParser;
var ReactListener = require("../gramatica/.antlr/ReactListener")
  .ReactListener;
var antlr4 = require("antlr4");
var fs = require("fs");
var path = require('path');
var util = require('util');

const ruta_entradas = path.join(__dirname, '/../archivos_entrada');



var KeyPrinter = function () {
  ReactListener.call(this);
  return this;
};

//  Variables globales del proyecto
var listOfComponentsInProject = [];
var componentMatrix = [];

//  Variables locales del listener
var listOfImports = [];
var currentComponent = "";
var currentPropTypesComponent = "";
var currentComponentCall = "";
var insideImport = false;
var listOfComponentsInFile = [];
var arrayOfComponentCalls = [];


KeyPrinter.prototype = Object.create(ReactListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;


KeyPrinter.prototype.enterProgram = function(ctx) {
};


KeyPrinter.prototype.enterFunctionR = function(ctx) {
  currentComponent = ctx.ID().toString();
};

KeyPrinter.prototype.exitFunctionR = function(ctx) {
  currentComponent = "";
};

KeyPrinter.prototype.enterHtml_elements = function(ctx){
  if(listOfComponentsInFile.filter((component) => 
  { return component.name === currentComponent}
  ).length === 0){
    listOfComponentsInFile.push({name: currentComponent, componentsInside: {}});
  }
  if(listOfImports.includes(ctx.ID()[0].toString())){
    
    index_of_component = -1;

    for(var i = 0; i < listOfComponentsInFile.length; i++){
      if(listOfComponentsInFile[i].name === currentComponent){
        index_of_component = i;
        break;
      }
    }


    if(arrayOfComponentCalls.filter(component => {
      return component.name === ctx.ID()[0].toString()
    }).length === 0){
      arrayOfComponentCalls.push({name: ctx.ID()[0].toString(), count: 1});
    }else{

      var indx = -1;
      arrayOfComponentCalls.forEach(component => {
        if(component.name === ctx.ID()[0].toString()){
          repeatedComponent = component;
        }
        indx = indx + 1;
      })
      arrayOfComponentCalls[indx].count = arrayOfComponentCalls[indx].count+1;
    }

    listOfComponentsInFile[index_of_component].componentsInside[ctx.ID()[0].toString()] = 
    listOfComponentsInFile[index_of_component].componentsInside[ctx.ID()[0].toString()] ?
    listOfComponentsInFile[index_of_component].componentsInside[ctx.ID()[0].toString()] :
    {};
    
    currentComponentCall = ctx.ID()[0].toString();
  }

}

KeyPrinter.prototype.enterHtml_short_element = function(ctx) {
  if(listOfComponentsInFile.filter((component) => 
  { return component.name === currentComponent}
  ).length === 0){
    listOfComponentsInFile.push({name: currentComponent, componentsInside: {}});
  }
  if(listOfImports.includes(ctx.ID().toString())){
    
    index_of_component = -1;

    for(var i = 0; i < listOfComponentsInFile.length; i++){
      if(listOfComponentsInFile[i].name === currentComponent){
        index_of_component = i;
        break;
      }
    }


    if(arrayOfComponentCalls.filter(component => {
      return component.name === ctx.ID().toString()
    }).length === 0){
      arrayOfComponentCalls.push({name: ctx.ID().toString(), count: 1});
    }else{

      var indx = -1;
      arrayOfComponentCalls.forEach(component => {
        if(component.name === ctx.ID().toString()){
          repeatedComponent = component;
        }
        indx = indx + 1;
      })
      arrayOfComponentCalls[indx].count = arrayOfComponentCalls[indx].count+1;
    }

    listOfComponentsInFile[index_of_component].componentsInside[ctx.ID().toString()] = 
    listOfComponentsInFile[index_of_component].componentsInside[ctx.ID().toString()] ?
    listOfComponentsInFile[index_of_component].componentsInside[ctx.ID().toString()] :
    {};
    
    currentComponentCall = ctx.ID().toString();
  }
};


KeyPrinter.prototype.enterNo_id_import = function(ctx){
  insideImport = true;
}
KeyPrinter.prototype.exitNo_id_import = function(ctx){
  insideImport = false;
}

KeyPrinter.prototype.enterId_import = function(ctx){
  insideImport = true;
  listOfImports.push(ctx.ID().toString());
}
KeyPrinter.prototype.exitId_import = function(ctx){
  insideImport = false;
}

KeyPrinter.prototype.enterId_list = function(ctx){
  if(insideImport === true){
    listOfImports.push(ctx.ID().toString());
  }
}

KeyPrinter.prototype.enterMore_id = function(ctx){
  if(insideImport === true){
    listOfImports.push(ctx.ID().toString());
  }
}

KeyPrinter.prototype.enterAdding_proptypes = function(ctx){
  currentPropTypesComponent = ctx.ID().toString();
  index_of_component = -1;
  for(var i = 0; i < listOfComponentsInFile.length; i++){
    if(listOfComponentsInFile[i].name === currentPropTypesComponent){
      index_of_component = i;
      break;
    }
  }
  listOfComponentsInFile[index_of_component].mustReceiveProps = [];
}

KeyPrinter.prototype.exitAdding_proptypes = function(ctx){
  currentPropTypesComponent = "";
}





KeyPrinter.prototype.enterProps = function(ctx){
  
  if(listOfImports.includes(currentComponentCall)){
    var repeated = false;
    
    var possibleRepeatedComponent = arrayOfComponentCalls.filter(component => {return component.name === currentComponentCall})[0];
    if(possibleRepeatedComponent.count >= 2){
      console.log("REPETIDO ", possibleRepeatedComponent.name);
      repeated = true;
    }
    index_of_component = -1;
    for(var i = 0; i < listOfComponentsInFile.length; i++){
      if(listOfComponentsInFile[i].name === currentComponent){
        index_of_component = i;
        break;
      }
    }
    

    if(!repeated){
      listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps ? 
      listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps.push(ctx.ID().toString()) :
      listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps = [ctx.ID().toString()];
    }else{
      console.log("REPETIDO CASO");
      console.log(util.inspect(listOfComponentsInFile[index_of_component].componentsInside, {showHidden: false, depth: null}))

      if(possibleRepeatedComponent.count >= 2 && 
        !Array.isArray( listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps[0])){
          console.log("Primer caso");
        listOfComponentsInFile[index_of_component]
        .componentsInside[currentComponentCall]
        .passedProps = [listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps];
        listOfComponentsInFile[index_of_component]
        .componentsInside[currentComponentCall]
        .passedProps[possibleRepeatedComponent.count -1] = [ctx.ID().toString()]
      }else{
        console.log("Segundo caso");
        listOfComponentsInFile[index_of_component]
        .componentsInside[currentComponentCall]
        .passedProps[possibleRepeatedComponent.count -1].push(ctx.ID().toString());
      }
    }
    
  }
}

ReactListener.prototype.enterMore_props = function(ctx) {
  if(listOfImports.includes(currentComponentCall)){
    var repeated = false;
    
    var possibleRepeatedComponent = arrayOfComponentCalls.filter(component => {return component.name === currentComponentCall})[0];
    if(possibleRepeatedComponent.count >= 2){
      console.log("REPETIDO ", possibleRepeatedComponent.name);
      repeated = true;
    }
    index_of_component = -1;
    for(var i = 0; i < listOfComponentsInFile.length; i++){
      if(listOfComponentsInFile[i].name === currentComponent){
        index_of_component = i;
        break;
      }
    }
    

    if(!repeated){
      listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps ? 
      listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps.push(ctx.ID().toString()) :
      listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps = [ctx.ID().toString()];
    }else{
      console.log("REPETIDO CASO");
      console.log(util.inspect(listOfComponentsInFile[index_of_component].componentsInside, {showHidden: false, depth: null}))

      if(possibleRepeatedComponent.count >= 2 && 
        !Array.isArray( listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps[0])){
          console.log("Primer caso");
        listOfComponentsInFile[index_of_component]
        .componentsInside[currentComponentCall]
        .passedProps = [listOfComponentsInFile[index_of_component].componentsInside[currentComponentCall].passedProps];
        listOfComponentsInFile[index_of_component]
        .componentsInside[currentComponentCall]
        .passedProps[possibleRepeatedComponent.count -1] = [ctx.ID().toString()]
      }else{
        console.log("Segundo caso");
        listOfComponentsInFile[index_of_component]
        .componentsInside[currentComponentCall]
        .passedProps[possibleRepeatedComponent.count -1].push(ctx.ID().toString());
      }
    }
    
  }
};

KeyPrinter.prototype.enterProp_types_body = function(ctx){
  index_of_component = -1;
  for(var i = 0; i < listOfComponentsInFile.length; i++){
    if(listOfComponentsInFile[i].name === currentPropTypesComponent){
      index_of_component = i;
      break;
    }
  }
  var prop = {name: ctx.ID().toString()}
  if(ctx.types_of_proptypes().NUMBER()){
    prop.type = (ctx.types_of_proptypes().NUMBER().toString());
  }else if(ctx.types_of_proptypes().ARRAY()){
    prop.type = (ctx.types_of_proptypes().ARRAY().toString());
  }else if(ctx.types_of_proptypes().BOOL()){
    prop.type = (ctx.types_of_proptypes().BOOL().toString());
  }else if(ctx.types_of_proptypes().FUNC()){
    prop.type = (ctx.types_of_proptypes().FUNC().toString());
  }else if(ctx.types_of_proptypes().OBJECT()){
    prop.type = (ctx.types_of_proptypes().OBJECT().toString());
  }else if(ctx.types_of_proptypes().STRING_TYPE()){
    prop.type = (ctx.types_of_proptypes().STRING_TYPE().toString());
  }else if(ctx.types_of_proptypes().SYMBOL()){
    prop.type = (ctx.types_of_proptypes().SYMBOL().toString());
  }
  listOfComponentsInFile[i].mustReceiveProps.push(prop);
}



KeyPrinter.prototype.exitProgram = function (ctx) {
  /*
  console.log();
  console.log("-------SALIDA-------");
  console.log();
  console.log("LISTA DE COMPONENTES LLAMADOS");
  console.log(util.inspect(listOfComponentsInFile, {showHidden: false, depth: null}))
  console.log();
  */
  listOfComponentsInFile.forEach(component => {
    listOfComponentsInProject.push(component);
  });
  listOfImports = [];
  currentComponent = "";
  currentComponentCalls = [];
  currentPropTypesComponent = "";
  currentComponentCall = "";
  insideImport = false;
  listOfComponentsInFile = [];
  currentPropType = "";
  arrayOfComponentCalls = [];
  
};


function matrixFromArray(arrayOfComponents){
  arrayOfComponents.forEach(component => {
    var arrayToAppend = [];
    for(var i = 0; i<arrayOfComponents.length; i++){
      arrayOfComponents[i].index = i;
      arrayToAppend.push(null);
    }
    componentMatrix.push(arrayToAppend)
  });
  for(var i = 0; i < arrayOfComponents.length; i++){
    var row = arrayOfComponents[i].index;
    var componentsCalled = Object.keys(arrayOfComponents[i].componentsInside);
    for(var j = 0; j<componentsCalled.length; j++){
      var nameOfComponent = componentsCalled[j];

      var columnComponent = arrayOfComponents.filter(component => {
        return component.name === nameOfComponent;
      })[0];
      var componentToMatrix = { name: columnComponent.name, props: []};

      if(arrayOfComponents[i].componentsInside[nameOfComponent].passedProps){
        for(var k = 0; k<arrayOfComponents[i].componentsInside[nameOfComponent].passedProps.length; k++){
          componentToMatrix.props.push(arrayOfComponents[i].componentsInside[nameOfComponent].passedProps[k]);
        }
      }
      

      componentMatrix[row][columnComponent.index] = componentToMatrix;
    }
  }
}


function main(inputText) {
  var chars = new antlr4.InputStream(inputText);
  var lexer = new ReactLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new ReactParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.program();
  var printer = new KeyPrinter();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

}


 function generateMatrix(){
  var files = fs.readdirSync(ruta_entradas);
  files.forEach(function (file) {
    var input = fs.readFileSync(`./archivos_entrada/${file}`).toString();
    main(input);
  });
  matrixFromArray(listOfComponentsInProject);
  return [listOfComponentsInProject, componentMatrix];
}


var matrizFinal = generateMatrix();

console.log(util.inspect(matrizFinal, {showHidden: false, depth: null}));
