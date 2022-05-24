import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bs';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;