import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-KE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;