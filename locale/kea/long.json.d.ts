import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kea';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;