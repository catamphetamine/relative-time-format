import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mi';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;