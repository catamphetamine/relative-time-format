import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-DM';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;