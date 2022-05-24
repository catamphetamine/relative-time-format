import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nb';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;