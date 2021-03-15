import React from "react";
import { Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import LogoComponent from "../../components/Sidebar/Logo/Logo";
import MenuItemComponent from "../../components/Sidebar/MenuItem/MenuItem";
import IconOverview from "../../assets/icons/icon-overview";
import IconTickets from "../../assets/icons/icon-tickets";
import IconIdeas from "../../assets/icons/icon-ideas";
import IconContacts from "../../assets/icons/icon-contacts";
import IconAgents from "../../assets/icons/icon-agents";
import IconArticles from "../../assets/icons/icon-articles";
import IconSettings from "../../assets/icons/icon-settings";
import IconSubscription from "../../assets/icons/icon-subscription";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363740",
    width: 255,
    paddingTop: 32,
  },
  menuItemList: {
    marginTop: 52,
  },
  separator: {
    borderTop: "1px solid #DFE0EB",
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
});

function SidebarComponent(props: { onChange: (arg0: string) => any; selectedItem: string; }) {
  return (
    <Column className={css(styles.container)}>
      <LogoComponent />
      <Column className={css(styles.menuItemList)}>
        <MenuItemComponent
          title="Overview"
          icon={IconOverview}
          onClick={() => props.onChange("Overview")}
          active={props.selectedItem === "Overview"}
        />
        <MenuItemComponent
          title="Tickets"
          icon={IconTickets}
          onClick={() => props.onChange("Tickets")}
          active={props.selectedItem === "Tickets"}
        />
        <MenuItemComponent
          title="Ideas"
          icon={IconIdeas}
          onClick={() => props.onChange("Ideas")}
          active={props.selectedItem === "Ideas"}
        />
        <MenuItemComponent
          title="Contacts"
          icon={IconContacts}
          onClick={() => props.onChange("Contacts")}
          active={props.selectedItem === "Contacts"}
        />
        <MenuItemComponent
          title="Agents"
          icon={IconAgents}
          onClick={() => props.onChange("Agents")}
          active={props.selectedItem === "Agents"}
        />
        <MenuItemComponent
          title="Articles"
          icon={IconArticles}
          onClick={() => props.onChange("Articles")}
          active={props.selectedItem === "Articles"}
        />
        <div className={css(styles.separator)}></div>
        <MenuItemComponent
          title="Settings"
          icon={IconSettings}
          onClick={() => props.onChange("Settings")}
          active={props.selectedItem === "Settings"}
        />
        <MenuItemComponent
          title="Subscription"
          icon={IconSubscription}
          onClick={() => props.onChange("Subscription")}
          active={props.selectedItem === "Subscription"}
        />
      </Column>
    </Column>
  );
}

export default SidebarComponent;
