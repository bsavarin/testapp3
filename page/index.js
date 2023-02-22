import { gettext } from 'i18n'

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo();
const deviceInfo = hmSetting.getDeviceInfo();
const screenShape = deviceInfo.screenShape;

Page({
  build() {
    console.log(gettext('example'))

    let toggleList = 1;
    let toggleList_index = 0;
    let toggleList_count = 5;
    let toggleKey = 'itemList01';
    let listName = 'List Name 01'; 

        // tap to toggle checklists
        function click_changeList() {
          toggleList_index++;
          if (toggleList_index > toggleList_count) toggleList_index = 1; 
          toggleList = toggleList_index;
          loadSettings();
          console.log("List Changed - toggle "+toggleList);
          console.log("List Changed - toggle key "+toggleKey);
          console.log("List Changed - list name "+listName);
          drawBackground();
          drawScrollList();
        };

      function loadSettings() {
      // toggle between lists
        if (toggleList == 1) {
          toggleKey = 'itemList01'; listName = 'List Name 01';
        } else if (toggleList == 2) {
          toggleKey = 'itemList02'; listName = 'List Name 02';
        } else if (toggleList == 3) {
          toggleKey = 'itemList03'; listName = 'List Name 03';
        } else if (toggleList == 4) {
          toggleKey = 'itemList04'; listName = 'List Name 04';
        } else if (toggleList == 5) {
          toggleKey = 'itemList05'; listName = 'List Name 05';
        }
      }

    const dataList = [
      { itemList01: 'list 1 item 1', itemList02: 'list 2 item 1', itemList03: 'list 3 item 1', itemList04: 'list 4 item 1', itemList05: 'list 5 item 1'},
      { itemList01: 'list 1 item 2', itemList02: 'list 2 item 2', itemList03: 'list 3 item 2', itemList04: 'list 4 item 2', itemList05: 'list 5 item 2'},
      { itemList01: 'list 1 item 3', itemList02: 'list 2 item 3', itemList03: 'list 3 item 3', itemList04: 'list 4 item 3', itemList05: 'list 5 item 3'},
      { itemList01: 'list 1 item 4', itemList02: 'list 2 item 4', itemList03: 'list 3 item 4', itemList04: 'list 4 item 4', itemList05: 'list 5 item 4'},
      { itemList01: 'list 1 item 5', itemList02: 'list 2 item 5', itemList03: 'list 3 item 5', itemList04: 'list 4 item 5', itemList05: 'list 5 item 5'},
      { itemList01: 'list 1 item 6', itemList02: 'list 2 item 6', itemList03: 'list 3 item 6', itemList04: 'list 4 item 6', itemList05: 'list 5 item 6'},
      { itemList01: 'list 1 item 7', itemList02: 'list 2 item 7', itemList03: 'list 3 item 7', itemList04: 'list 4 item 7', itemList05: 'list 5 item 7'},
      { itemList01: 'list 1 item 8', itemList02: 'list 2 item 8', itemList03: 'list 3 item 8', itemList04: 'list 4 item 8', itemList05: 'list 5 item 8'},
      { itemList01: 'list 1 item 9', itemList02: 'list 2 item 9', itemList03: 'list 3 item 9', itemList04: 'list 4 item 9', itemList05: 'list 5 item 9'},
      { itemList01: 'list 1 item 10', itemList02: 'list 2 item 10', itemList03: 'list 3 item 10', itemList04: 'list 4 item 10', itemList05: 'list 5 item 10'}
    ]

   /* function scrollListItemClick() {
      // console.log('scrollListItemClick index=' + index)
      console.log('Scroll Item Clicked');
      drawBackground();
      drawScrollList();
    }*/

    // background images (round or rect)
    function drawBackground() {
      // background images (round or rect)
      if (screenShape == 1) {
      hmUI.createWidget(hmUI.widget.CIRCLE, {
          //...IMG_BG_ROUND,
          center_x: DEVICE_WIDTH/2,
          center_y: DEVICE_HEIGHT/2,
          radius: DEVICE_WIDTH,
          color: 0x000000, //screenType == hmSetting.screen_type.AOD ? 0x000000 : backgroundColour,
        })
      } else {
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          //...IMG_BG_RECT,
          x: 0,
          y: 0,
          w: DEVICE_WIDTH,
          h: DEVICE_HEIGHT,
          radius: 0,
          color: 0x000000, //screenType == hmSetting.screen_type.AOD ? 0x000000 : backgroundColour,
        })
      }
    }

    function drawScrollList() {
      //loadSettings();
      hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
        x: 0,
        y: DEVICE_HEIGHT * 0.15,
        h: DEVICE_HEIGHT * 0.85,
        w: DEVICE_WIDTH * 0.98,
        item_space: 10,
        item_config: [
          {
            type_id: 1,
            item_bg_color: 0xef5350,
            item_bg_radius: 10,
            text_view: [
              { x: 0, y: 0, w: DEVICE_WIDTH * 0.98, h: 30, key: toggleKey, color: 0xffffff, text_size: 20 }
            ],
            text_view_count: 1, //number of text elements per box
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            font: 'fonts/DIN1451MittelschriftAlternat-Regular.ttf',
            item_height: DEVICE_HEIGHT * 0.1
          }
        ],
        item_config_count: 1,
        data_array: dataList,
        data_count: dataList.length,
       // item_click_func: scrollListItemClick(),
      })

    hmUI.createWidget(hmUI.widget.TEXT, {
      //...LISTNAME,
      text: gettext(listName),
      x: 0,
      y: DEVICE_HEIGHT * 0.15,
      w: DEVICE_WIDTH,
      h: px(40),
      color: 0xffffff,
      text_size: px(30),
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      font: 'fonts/DIN1451MittelschriftAlternat-Regular.ttf',
    })

      // Tap list name to switch through lists
      hmUI.createWidget(hmUI.widget.BUTTON, {
        //...IMG_CHG_DFORMAT_BUTTON,
        x: 0,
        y: DEVICE_HEIGHT * 0.15,
        text: '',
        w: 400,
        h: 50,
        normal_src: 'transpImg.png', // transparent image
        press_src: 'transpImg.png',  // transparent image
        show_level: hmUI.show_level.ONLY_NORMAL,
        click_func: () => {
          click_changeList();
        }
      });

    }
      drawBackground();
      drawScrollList();

  }
})
