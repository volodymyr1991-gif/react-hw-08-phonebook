import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import ContactForm from "../../components/form/Form";
import Filter from "../../components/filter/Filter";
import ContactList from "../../components/contactList/ContactList";
import { fetchContacts } from "../../redux/contacts/contactsOperations";
import { getLoading } from "../../redux/contacts/contactsSelectors";
import { isAuthenticated } from "../../redux/auth/authSelectors";
import styles from "./Phonebook.module.css";

class Phonebook extends Component {
  componentDidMount() {
    if (!this.props.isAuth) {
      this.props.history.replace("/login");

      return;
    }
    this.props.fetchContacts();
  }
  componentDidUpdate() {
    if (!this.props.isAuth) {
      this.props.history.replace("/login");

      return;
    }
  }

  render() {
    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={styles}
        unmountOnExit
      >
        {(stage) => {
          return (
            <>
              <h1 className={styles.title}>Phonebook</h1>
              <CSSTransition
                in={stage === "entered"}
                appear={true}
                timeout={500}
                classNames={styles}
                unmountOnExit
              >
                <ContactForm addToContacts={this.addToContacts} />
              </CSSTransition>
              <CSSTransition
                in={stage === "entered"}
                appear={true}
                timeout={500}
                classNames={styles}
                unmountOnExit
              >
                <>
                  <h2 className={styles.title}>Contacts</h2>
                  <CSSTransition
                    in={true}
                    appear={true}
                    timeout={500}
                    classNames={styles}
                    unmountOnExit
                  >
                    <Filter />
                  </CSSTransition>
                  <CSSTransition
                    in={true}
                    appear={true}
                    timeout={500}
                    classNames={styles}
                    unmountOnExit
                  >
                    <ContactList />
                  </CSSTransition>
                </>
              </CSSTransition>
            </>
          );
        }}
      </CSSTransition>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: getLoading(state),
  isAuth: isAuthenticated(state),
});
const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
