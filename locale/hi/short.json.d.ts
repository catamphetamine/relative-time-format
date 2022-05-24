import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hi';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;