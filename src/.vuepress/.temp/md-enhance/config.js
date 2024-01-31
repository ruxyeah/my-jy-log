import { defineClientConfig } from "@vuepress/client";
import VPCard from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/components/VPCard.js";
import CodeTabs from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useContainer } from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/composables/container.js";
import "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import Playground from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/System/Volumes/Data/电子书/xfg-dev-tech-blog-master/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", VPCard)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useContainer();
  }
});
