import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getStream } from '../../actions/StreamsActions';
import Wrapper from '../Wrapper';

class StreamScreen extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.dispatch(getStream(this.props.navigation.state.params.data));
	}

	render() {
		const { stream, error } = this.props;

		//super duper Костиль!
		let html = stream
			? stream.substring(0, 7) + ' style="position: absolute; width: 100%; height: 100%;" ' + stream.substring(7)
			: null;

		return (
			<Wrapper>
				{!error && html && (
					<WebView scalesPageToFit javaScriptEnabled source={{ html: html }} style={styles.video} />
				)}
			</Wrapper>
		);
	}
}

const styles = StyleSheet.create({
	video: {
		backgroundColor: '#18142E',
		paddingBottom: '56.25%',
	},
});

const mapStateToProps = state => {
	const { stream, error } = state.streams;
	return {
		stream,
		error,
	};
};

export default connect(mapStateToProps)(StreamScreen);
