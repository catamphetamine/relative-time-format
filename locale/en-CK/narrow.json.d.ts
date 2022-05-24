import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CK';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;