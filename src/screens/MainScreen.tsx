import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Modal,
  Input,
  Text,
} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import {View} from 'react-native';
import {RootContext} from '../../App';
import {useContext} from 'react';
import {useState} from 'react';
// import {ImageOverlay} from '../components/ImageOverlayComponent';
// import BackgroundImage from '../components/BackgroundImage';

const MainScreen = ({navigation: any}) => {
  const {data, setData} = useContext(RootContext);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const navigateDetails = () => {
    console.log(data);
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleAddUser = () => {
    const newTotal = [...data.total];
    newTotal.push(value);
    if (value) {
      setData({
        ...data,
        total: newTotal,
      });
      setValue('');
    }

    setVisible(false);
  };

  return (
    <ScrollView>
      <Layout>
        <TopNavigation title="许下的诺言" alignment="center" />
        <Divider />

        <Layout style={[styles.buttonContainer, styles.heigh300]}>
          <Button style={styles.mainButton} onPress={navigateDetails}>
            离经叛道
          </Button>
        </Layout>
        <Layout style={[styles.buttonContainer, styles.heigh100]}>
          <Button style={styles.addButton} onPress={toggleModal}>
            入
          </Button>
        </Layout>
        <Modal
          style={styles.modalContainer}
          visible={visible}
          onBackdropPress={toggleModal}
          backdropStyle={styles.backdrop}>
          <View style={styles.inputContainer}>
            <Input value={value} onChangeText={setValue} />
          </View>
          <Button style={styles.button} onPress={handleAddUser}>
            遁入
          </Button>
        </Modal>
        <Layout style={[styles.usersContainer, styles.heighAll]}>
          {data.total.map((user) => (
            <View key={user} style={styles.userContainer}>
              <Text style={styles.text}>{user}</Text>
            </View>
          ))}
        </Layout>
      </Layout>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  // safeAreaView: {flex: 1, backgroundColor: 'transparent'},
  container: {flex: 1},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  usersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: 10,
  },
  text: {
    color: '#fff',
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 5,
    backgroundColor: '#3366ff',
  },
  heigh300: {height: 300},
  heigh100: {height: 100},
  heighAll: {height: '100%'},
  mainButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    marginTop: 4,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#8F9BB3',
    height: 200,
    width: 200,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputContainer: {
    width: '80%',
    height: 100,
  },
});
