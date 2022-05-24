import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fil';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;