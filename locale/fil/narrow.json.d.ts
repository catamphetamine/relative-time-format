import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fil';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;