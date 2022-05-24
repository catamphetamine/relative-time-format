import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fil';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;