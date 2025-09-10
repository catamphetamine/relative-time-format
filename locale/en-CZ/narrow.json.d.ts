import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CZ';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;