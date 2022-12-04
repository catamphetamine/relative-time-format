import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kab';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;