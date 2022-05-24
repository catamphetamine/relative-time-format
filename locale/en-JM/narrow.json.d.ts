import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-JM';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;