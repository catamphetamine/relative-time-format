import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'de';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;