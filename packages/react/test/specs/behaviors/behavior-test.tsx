// Behavior-test use 'docs\src\behaviorMenu.json' file as source of strings to parse.
// The json file is generated by task 'build:docs:component-menu-behaviors'. The task will generate json file from the behaviors description.
// If you change behavior description, then you need to run:
//  - 'gulp build:docs:component-menu-behaviors' in order to get json file generated
//  OR
//  - 'yarn test' which has creating json file predefined in "pretest" step
import {
  attachmentBehavior,
  basicListBehavior,
  basicListItemBehavior,
  buttonBehavior,
  checkboxBehavior,
  embedBehavior,
  iconBehavior,
  imageBehavior,
  inputBehavior,
  loaderBehavior,
  menuBehavior,
  menuItemBehavior,
  menuDividerBehavior,
  submenuBehavior,
  popupBehavior,
  popupFocusTrapBehavior,
  popupAutoFocusBehavior,
  dialogBehavior,
  radioGroupBehavior,
  radioGroupItemBehavior,
  selectableListBehavior,
  selectableListItemBehavior,
  tabBehavior,
  tabListBehavior,
  toggleButtonBehavior,
  menuAsToolbarBehavior,
  menuItemAsToolbarButtonBehavior,
  treeBehavior,
  treeTitleBehavior,
  treeItemBehavior,
  subtreeBehavior,
  gridBehavior,
  statusBehavior,
  alertWarningBehavior,
  accordionBehavior,
  accordionTitleBehavior,
  accordionContentBehavior,
  chatBehavior,
  chatMessageBehavior,
  toolbarBehavior,
  toolbarRadioGroupBehavior,
  toolbarRadioGroupItemBehavior,
} from 'src/lib/accessibility'
import { TestHelper } from './testHelper'
import definitions from './testDefinitions'

const behaviorMenuItems = require('docs/src/behaviorMenu')

const testHelper = new TestHelper()
testHelper.addTests(definitions)

testHelper.addBehavior('attachmentBehavior', attachmentBehavior)
testHelper.addBehavior('basicListBehavior', basicListBehavior)
testHelper.addBehavior('basicListItemBehavior', basicListItemBehavior)
testHelper.addBehavior('buttonBehavior', buttonBehavior)
testHelper.addBehavior('checkboxBehavior', checkboxBehavior)
testHelper.addBehavior('embedBehavior', embedBehavior)
testHelper.addBehavior('iconBehavior', iconBehavior)
testHelper.addBehavior('inputBehavior', inputBehavior)
testHelper.addBehavior('imageBehavior', imageBehavior)
testHelper.addBehavior('loaderBehavior', loaderBehavior)
testHelper.addBehavior('menuBehavior', menuBehavior)
testHelper.addBehavior('menuItemBehavior', menuItemBehavior)
testHelper.addBehavior('menuDividerBehavior', menuDividerBehavior)
testHelper.addBehavior('submenuBehavior', submenuBehavior)
testHelper.addBehavior('popupBehavior', popupBehavior)
testHelper.addBehavior('popupFocusTrapBehavior', popupFocusTrapBehavior)
testHelper.addBehavior('popupAutoFocusBehavior', popupAutoFocusBehavior)
testHelper.addBehavior('radioGroupBehavior', radioGroupBehavior)
testHelper.addBehavior('radioGroupItemBehavior', radioGroupItemBehavior)
testHelper.addBehavior('selectableListBehavior', selectableListBehavior)
testHelper.addBehavior('selectableListItemBehavior', selectableListItemBehavior)
testHelper.addBehavior('tabBehavior', tabBehavior)
testHelper.addBehavior('tabListBehavior', tabListBehavior)
testHelper.addBehavior('menuAsToolbarBehavior', menuAsToolbarBehavior)
testHelper.addBehavior('toggleButtonBehavior', toggleButtonBehavior)
testHelper.addBehavior('menuItemAsToolbarButtonBehavior', menuItemAsToolbarButtonBehavior)
testHelper.addBehavior('treeTitleBehavior', treeTitleBehavior)
testHelper.addBehavior('treeBehavior', treeBehavior)
testHelper.addBehavior('treeItemBehavior', treeItemBehavior)
testHelper.addBehavior('subtreeBehavior', subtreeBehavior)
testHelper.addBehavior('gridBehavior', gridBehavior)
testHelper.addBehavior('dialogBehavior', dialogBehavior)
testHelper.addBehavior('statusBehavior', statusBehavior)
testHelper.addBehavior('alertWarningBehavior', alertWarningBehavior)
testHelper.addBehavior('accordionBehavior', accordionBehavior)
testHelper.addBehavior('accordionTitleBehavior', accordionTitleBehavior)
testHelper.addBehavior('accordionContentBehavior', accordionContentBehavior)
testHelper.addBehavior('chatBehavior', chatBehavior)
testHelper.addBehavior('chatMessageBehavior', chatMessageBehavior)
testHelper.addBehavior('toolbarBehavior', toolbarBehavior)
testHelper.addBehavior('toolbarRadioGroupBehavior', toolbarRadioGroupBehavior)
testHelper.addBehavior('toolbarRadioGroupItemBehavior', toolbarRadioGroupItemBehavior)

testHelper.run(behaviorMenuItems)
