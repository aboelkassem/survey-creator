import * as ko from "knockout";
import { Serializer, QuestionFactory } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { SurveyCreator } from "./creator";

const template = require("./survey-creator.html");
// import template from "./creator.html";

Serializer.removeClass("tagbox"); // remove after tagbox implemented
QuestionFactory.Instance.unregisterElement("tagbox");

export class CreatorViewModel {
  constructor(public creator: SurveyCreator, private rootNode: HTMLElement) {
    this.creator.initKeyboardShortcuts(this.rootNode);
    this.creator.initResponsivityManager(this.rootNode as HTMLDivElement);
    new ImplementorBase(this.creator.notifier);
    new ImplementorBase(this.creator.toolbox);
    new ImplementorBase(this.creator.dragDropSurveyElements);
    new ImplementorBase(this.creator.dragDropChoices);
    new ImplementorBase(this.creator);
  }
  dispose(): void {
    this.creator.removeKeyboardShortcuts(this.rootNode);
    this.creator.resetResponsivityManager();
  }
}

ko.components.register("survey-creator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const element = componentInfo.element;
      const model = new CreatorViewModel(params.creator, element);
      ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
