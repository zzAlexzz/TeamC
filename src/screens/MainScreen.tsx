import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  Divider,
  TopNavigation,
  Modal,
  Input,
} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import {View} from 'react-native';
import {Data, RootContext} from '../../App';
import {useContext} from 'react';
import {useState} from 'react';
import UsersArray from '../components/UsersArray';
import {processData} from '../lib/utils';
import {ImageOverlay} from '../components/ImageOverlayComponent';
// import BackgroundImage from '../components/BackgroundImage';

const MainScreen = ({navigation: any}) => {
  const {data, setData} = useContext(RootContext);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const handleProcess = () => {
    console.log('original data:', data);
    const newData = processData(data.users);
    console.log('latest data:', newData);
    setData(newData);
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleAddUser = () => {
    const newUsers = [...data.users];
    newUsers.push(value);
    if (value) {
      setData({
        ...data,
        users: newUsers,
      });
      setValue('');
    }

    setVisible(false);
  };

  return (
    <View style={[styles.container, styles.bgt]}>
      <TopNavigation title="许下的诺言" alignment="center" />
      <Divider />
      <ImageOverlay
        style={styles.imageContainer}
        source={require('../../assets/main.png')}>
        <ScrollView>
          <View style={[styles.imageViewContainer, styles.bgt]}>
            <View style={[styles.buttonContainer, styles.heigh200, styles.bgt]}>
              <Button style={styles.mainButton} onPress={handleProcess}>
                离经叛道
              </Button>
            </View>
            <View style={[styles.buttonContainer, styles.heigh200]}>
              <Button style={styles.addButton} onPress={toggleModal}>
                入
              </Button>
            </View>
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
            <View style={styles.center}>
              <UsersArray users={data.users} />
            </View>
          </View>

        </ScrollView>
      </ImageOverlay>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  // safeAreaView: {flex: 1, backgroundColor: 'transparent'},
  bgt: {backgroundColor: 'transparent'},
  imageContainer: {
    height: '100%',
    width: '100%',
  },
  imageViewContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {flex: 1},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heigh300: {height: 300},
  heigh200: {height: 200},
  heigh100: {height: 100},
  mainButton: {
    marginTop: 210,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    // backgroundColor: 'rgba(26, 115, 232, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addButton: {
    // marginTop: 100,
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
  scrollView: {
    height: 900,
  },
});
