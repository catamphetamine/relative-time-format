import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kea';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;