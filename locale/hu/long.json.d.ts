import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hu';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;