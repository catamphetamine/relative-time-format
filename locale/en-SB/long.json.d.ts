import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SB';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;